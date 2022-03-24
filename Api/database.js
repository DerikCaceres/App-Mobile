const mongoose = require('mongoose');
const URI = 'mongodb+srv://estudio-user:12345@dev.pzjdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB up'))
    .catch(() => console.log(err));

