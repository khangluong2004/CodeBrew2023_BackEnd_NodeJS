# Codebrew Backend API
### 400: Always empty
User account management:
1. /user/login: Body {username: str, password: str} -> 200: {token: JWT token} or 400: empty
2. /user/register: Body {username: str, password: str} -> 200: {data: true}
3. /user/validate_token: Body {token: str} -> 200: {data: true}

### API:
#### All prefixes: /api/ 
#### Add your token as {token} in the header
Products management:
1. /products/list: Body {} -> 200: {data: [{name: str, price: num, amount: num, unit: str}, ...]}
2. /products/info: Body {name, quantity} -> 200: {data: [{nutrient_name: str, quantity: num, unit: str}, ...]}

Recipe:
1. /recipe/search: Body {query, diet, intolerance, direction: ("asc" or "desc")} -> 200: {data: [{image: url, summary: str, sourceUrl: url, pricePerServing: num} of 5]}
2. /recipe/add_normal: Body {ingredients: [str1, str2, ...], instructions} -> 200: {data: true}
3. /recipe/add_online: Body {image, sourceUrl, summary, pricePerServing} -> 200: {data: true}

Chat:
1. /chat/post: Body {post} -> 200: {data: true/ false (if toxic)}