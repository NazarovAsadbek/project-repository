import mock from "@/fake-db/mock.js"

// chat 
const ChatDB = {
    user: [
      {
        id: "7863a6802ez0e277a0f98534",
        name: "John Doe",
        avatar: "/assets/images/face-1.jpg",
        status: "online",
        chatInfo: [
          {
            chatId: "89564a680b3249760ea21fe77",
            contactId: "323sa680b3249760ea21rt47",
            unread: 4,
            lastChatTime: "2017-06-12T02:10:18.931Z",
          },
          {
            chatId: "3289564a680b2134760ea21fe7753",
            contactId: "14663a3406eb47ffa63d4fec9429cb71",
            unread: 0,
            lastChatTime: "2019-03-10T02:10:18.931Z",
          },
          {
            chatId: "4289564a680b2134760ea21fe7753",
            contactId: "7863a6802ez0e277a0f98534",
            unread: 0,
            lastChatTime: "2019-03-10T02:10:18.931Z",
          },
        ],
      },
    ],
  
    contacts: [
      {
        id: "323sa680b3249760ea21rt47",
        name: "Frank Powell",
        avatar: require("@/assets/images/faces/2.jpg"),
        status: "online",
        mood: "",
      },
      {
        id: "7863a6802ez0e277a0f98534",
        name: "John Doe",
        avatar: require("@/assets/images/faces/3.jpg"),
        status: "online",
        mood: "",
      },
      {
        id: "14663a3406eb47ffa63d4fec9429cb71",
        name: "Betty Diaz",
        avatar: require("@/assets/images/faces/4.jpg"),
        status: "online",
        mood: "",
      },
      
   
    ],

    
    chatCollection: [
      {
        id: "89564a680b3249760ea21fe77",
        chats: [
          {
            contactId: "323sa680b3249760ea21rt47",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Do you ever find yourself falling into the “discount trap?”",
            textTwo: "No",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Giving away your knowledge or product just to gain clients?",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "323sa680b3249760ea21rt47",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Yes",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "323sa680b3249760ea21rt47",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Do you ever find yourself falling into the “discount trap?”",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Giving away your knowledge or product just to gain clients?",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "323sa680b3249760ea21rt47",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Yes",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/2.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Giving away your knowledge or product just to gain clients?",
            time: "2018-02-10T08:45:28.291Z",
          },
        ],
      },
      {
        id: "4289564a680b2134760ea21fe7753",
        chats: [
          {
            contactId: "14663a3406eb47ffa63d4fec9429cb71",
            avatar: require("@/assets/images/faces/3.jpg"),
            text: "Wassup danny",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/3.jpg"),
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "14663a3406eb47ffa63d4fec9429cb71",
            avatar: require("@/assets/images/faces/3.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/3.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
        ],
      },
      {
        id: "3289564a680b2134760ea21fe7753",
        chats: [
          {
            contactId: "14663a3406eb47ffa63d4fec9429cb71",
            avatar: require("@/assets/images/faces/4.jpg"),
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/4.jpg"),
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "14663a3406eb47ffa63d4fec9429cb71",
            avatar: require("@/assets/images/faces/4.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
          {
            contactId: "7863a6802ez0e277a0f98534",
            avatar: require("@/assets/images/faces/4.jpg"),
            text: "Don’t feel bad. It happens to a lot of us",
            textTwo: "Perfect",
            time: "2019-03-10T08:45:28.291Z",
          },
        ],
      },
      
    ],


    chats: [
        {
            text: 'Do you ever find yourself falling into the “discount trap?”.',
            textTwo: 'No'
        }
    ]
  };
  

  mock.onGet("/api/chat/contacts").reply(() => {
    const response = ChatDB.contacts;
    return [200, response]
  })
  mock.onGet("/api/chat/chats").reply(() => {
    const response = ChatDB.chats;
    return [200, response]
  })

  mock.onGet("/api/chat/id").reply((config) => {
    
    
    // console.log(config.contactID, 'backend');
    let admin = ChatDB.user;
   
    
    // between user and contact table 
    let recentID = admin[0].chatInfo.find(x => x.contactId === config.contactID)

    //between user and chat collection
    
    let response =  ChatDB.chatCollection.find(x => x.id == recentID.chatId)
    // let fetchTwo = fetch.chats.map(x => x)
    
    
    return [200, response];
  });

  mock.onPost('/api/chat/send-msg').reply((config) => {
        console.log(config);

        return [200, config]
  });