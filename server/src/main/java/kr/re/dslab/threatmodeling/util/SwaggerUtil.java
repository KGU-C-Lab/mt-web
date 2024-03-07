package kr.re.dslab.threatmodeling.util;

import kr.re.dslab.threatmodeling.config.OpenApiPatternsProperties;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.regex.Pattern;


@Component
public class SwaggerUtil implements InitializingBean {

    private static String[] swaggerPatterns;

    @Autowired
    private OpenApiPatternsProperties openApiPatternsProperties;

    @Override
    public void afterPropertiesSet() throws Exception {
        swaggerPatterns = openApiPatternsProperties.getPatterns();
    }

    public static boolean isSwaggerRequest(String path) {
        for (String pattern : swaggerPatterns) {
            if (Pattern.compile(pattern).matcher(path).find()) {
                return true;
            }
        }
        return false;
    }

}