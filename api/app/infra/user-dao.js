const userConverter = row => ({
    id: row.user_id,
    name: row.user_name,
    email: row.user_email
});

class UserDao {

    constructor(db) {
        this._db = db;
    }

    findByNameAndPassword(userName, password) {
        return new Promise((resolve, reject) => this._db.get(
            `SELECT * FROM user WHERE user_name = ? AND user_password = ?`,
            [userName, password],
            (err, row) => {
                if (err) {
                    console.log(err);
                    return reject('Can`t find user');
                }
                 
                if(row) resolve(userConverter(row));
                resolve(null);
            }
        ));
    }

    findByName(userName) {

        return new Promise((resolve, reject) => this._db.get(
            `SELECT * FROM user WHERE user_name = ?`,
            [userName],
            (err, row) => {
                if (err) {
                    console.log(err);
                    return reject('Can`t find user');
                }
                 
                if(row) resolve(userConverter(row));
                resolve(null);
            }
        ));
        
    }

    add(user) {
        return new Promise((resolve, reject) => {
            
            this._db.run(`
                INSERT INTO user (
                    user_name,
                    user_full_name,
                    user_email, 
                    user_password, 
                    user_join_date
                ) values (?,?,?,?,?)
            `,
                [
                    user.userName,
                    user.fullName,
                    user.email, 
                    user.password, 
                    new Date()
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Can`t register new user');
                    }
                    console.log(`User ${user.userName} registered!`)
                    resolve();
                });
        });
    }

}
module.exports = UserDao;