# Codebrew Backend API
### 400: Always empty
User account management:
1. /user/login: Body {username: str, password: str} -> 200: {token: JWT token} or 400: empty
2. /user/register: Body {username: str, password: str} -> 200: {data: true}
3. /user/validate_token: Body {token: str} -> 200: {data: true}