const API = {
  fetchUserData() {
    return new Promise((res, rej) => {
      const userData = {
        username: "Jackie Decodes",
        userHandle: "dwyfrequency"
      };

      return res(userData);
    });
  },
  fetchCardData() {
    return new Promise((res, rej) => {
      const cardData = [
        {
          author: "Mr. Decodes",
          userHandle: "jackiedecodes",
          contentTitle: "Learning React? Start Small",
          contentDescr:
            "Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps",
          url: "dev.to",
          avatar: ""
        }
      ];
      return res(cardData);
    });
  }
};

export default API;
