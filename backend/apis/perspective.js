const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey: process.env.PERSPECTIVE_API_KEY});

(async () => {
  const text = 'Fuck you!';
  const result = await perspective.analyze(text);
  console.log(JSON.stringify(result, null, 2));
})();