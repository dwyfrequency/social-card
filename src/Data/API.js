const API = {
  fetchUserData() {
    return new Promise((res, rej) => {
      const userData = {
        userFullName: "Jackie Decodes",
        userHandle: "dwyfrequency",
        userAvatar: ""
      };

      return res(userData);
    });
  },
  fetchCardData() {
    return new Promise((res, rej) => {
      const cardData = [
        {
          author: "Mr. Decodes",
          authorHandle: "jackiedecodes",
          contentTitle: "Learning React? Start Small",
          contentDescr:
            "Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps",
          url: "dev.to",
          authorAvatar:
            "https://avatars2.githubusercontent.com/u/8900894?s=400&u=a11d575f8faa9da6744f4965ec776f52241d4c93&v=4"
        }
      ];
      return res(cardData);
    });
  }
};

export default API;
