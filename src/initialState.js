const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  messages: {
    firstMessage: {
      content: 'First message',
      timeStamp: Date.now() - 600,
      uid: 'firstUser'
    },
    secondMessage: {
      content: 'Second message',
      timeStamp: Date.now() - 540,
      uid: 'secondUser'
    }
  },
  users: {
    firstUser: {
      displayName: 'Artem Radzivon',
      email: 'artemradzivon@gmail.com',
      photoURL:
        'https://lh5.googleusercontent.com/-em0gBJ0PPmQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfipaziVIRM9G3FRFgWeBUJOSJcmw/photo.jpg'
    },
    secondUser: {
      displayName: 'Place Kitten',
      email: 'kitten@example.com',
      photoURL: 'https://placekitten.com/g/200/200'
    }
  }
};

export default initialState;
