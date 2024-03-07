package kr.re.dslab.threatmodeling.auth.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import kr.re.dslab.threatmodeling.auth.application.WhitelistService;
import kr.re.dslab.threatmodeling.util.HttpReqResUtil;
import kr.re.dslab.threatmodeling.util.ResponseUtil;
import kr.re.dslab.threatmodeling.util.SwaggerUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Slf4j
public class CustomBasicAuthenticationFilter extends BasicAuthenticationFilter {

    private final WhitelistService whitelistService;

    public CustomBasicAuthenticationFilter(
            AuthenticationManager authenticationManager,
            WhitelistService whitelistService
    ) {
        super(authenticationManager);
        this.whitelistService = whitelistService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        String path = request.getRequestURI();
        if (!SwaggerUtil.isSwaggerRequest(path)) {
            chain.doFilter(request, response);
            return;
        }
        if (!verifyIpAddressAccess(response)) {
            return;
        }
        if (!authenticateUserCredentials(request, response)) {
            return;
        }
        super.doFilterInternal(request, response, chain);
    }

    private boolean authenticateUserCredentials(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
            response.setHeader("WWW-Authenticate", "Basic realm=\"Please enter your username and password\"");
            ResponseUtil.sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        String[] credentials = decodeCredentials(authorizationHeader);
        if (credentials.length < 2) {
            ResponseUtil.sendErrorResponse(response, HttpServletResponse.SC_BAD_REQUEST);
            return false;
        }
        String username = credentials[0];
        String password = credentials[1];
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
        Authentication authentication = getAuthenticationManager().authenticate(authRequest);
        if (authentication == null) {
            ResponseUtil.sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return true;
    }

    private boolean verifyIpAddressAccess(HttpServletResponse response) throws IOException {
        String clientIpAddress = HttpReqResUtil.getClientIpAddressIfServletRequestExist();
        List<String> whitelistIps = whitelistService.loadWhitelistIps();
        if (!(whitelistIps.contains(clientIpAddress) || whitelistIps.contains("*"))
        ) {
            log.info("[{}] : 정책에 의해 차단된 IP입니다.", clientIpAddress);
            ResponseUtil.sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        return true;
    }

    @NotNull
    private static String[] decodeCredentials(String authorizationHeader) {
        String base64Credentials = authorizationHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        return credentials.split(":", 2);
    }

}