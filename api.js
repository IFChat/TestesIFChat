import firebase from './database'

const api = {
    findUserByName: async function (name) {
       const user = await firebase
            .database()
            .ref('users')
            .orderByChild('name')
            .equalTo(name)
            .once("value")

    if (user.exists()){
        console.log("USUÁRIO");
        return Object.values(user.val())[0];
    }
    return null;

    },

    createUser: function async (user){
        firebase.database().ref('users').push(user);
    },

    createMessage: function async (message){
        firebase.database().ref("messages").push(message);
    },

    updateMessages: function async (callback) {
        firebase.database()
        .ref("messages")
        .limitToLast(20)
        .on("child_added", (snapshot) => {
            callback(parse(snapshot));
        });
    },

};

const parse = (snapshot) => {
    const { createdAt, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const message = { _id, createdAt, text, user };
    return message;
  };

export default api;