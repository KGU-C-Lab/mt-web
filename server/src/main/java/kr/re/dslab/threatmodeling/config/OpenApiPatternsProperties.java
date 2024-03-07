package kr.re.dslab.threatmodeling.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Setter
@Getter
@Configuration
@ConfigurationProperties(prefix = "security.swagger")
public class OpenApiPatternsProperties {

    private String[] patterns;

}
