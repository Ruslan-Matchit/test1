module.exports = {
  posts: [
    { id: 1, title: 'Lorem Ipsum', user_id: 123, completed: false },
    { id: 2, title: 'Sic Dolor amet', user_id: 456, completed: false }
  ],
  users: [{ id: 123, name: 'John Doe' }, { id: 456, name: 'Jane Doe' }],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: 'Consectetur adipiscing elit',
      date: new Date('2017-07-03')
    },
    {
      id: 995,
      post_id: 1,
      body: 'Nam molestie pellentesque dui',
      date: new Date('2017-08-17')
    }
  ]
};
