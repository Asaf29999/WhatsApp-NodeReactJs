const passwordHash = require('password-hash');

const encodeUserPass = (user) => {
    console.log('.......................')
    const newUser = user;
    console.log(newUser);

    const pss = passwordHash.generate(String(user.password))
    //console.log(pss);

    newUser.password = pss;
    console.log(newUser);
    console.log('.......................')
    return newUser;
};

const encodePass = (password) => {
    console.log('.......................')
    console.log(passwordHash.generate('12345678'))
    console.log(passwordHash.generate('12345678'))
    console.log('.......................')
    console.log('.......................')
    console.log(passwordHash.verify('12345678', 'sha1$fe042227$1$90a54d0c691b3b032468e1bd80a96e1f1858d849')); // true
    console.log(passwordHash.verify('12345678', 'sha1$f215bf84$1$d24c1e522a2d8393bf0d3baee9c7511c4b092d44')); // true
    console.log('.......................')

    console.log(password);
    const passworded = passwordHash.generate(String (password))
    console.log(passworded);
    return passworded;
};

module.exports = {
    encodePass: encodePass,
    encodeUserPass: encodeUserPass,
  };