package org.zerock.api01.dto;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class APIUserDTO extends User {
    private String userId;
    private String userPw;

    public APIUserDTO(String username, String password, Collection<GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.userId = username;
        this.userPw = password;
    }
}
