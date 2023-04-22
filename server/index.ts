const express = require('express');

const app = express();

app.get('/hit', (req: any, res: any) => {
	res.send('I have been hit');
});

app.listen(5000, () => console.log('Server is up and running'));
