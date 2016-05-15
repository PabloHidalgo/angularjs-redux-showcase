import {unreadEmailsSelector} from './unread-emails';

describe('unread emails selector', () => {
  const mockState = {
    emails: [
      {
        id: '1',
        title: 'Readed Email',
        body: '-',
        isReaded: true
      },
      {
        id: '2',
        title: 'Unread Email',
        body: '-',
        isReaded: false
      },
      {
        id: '3',
        title: 'Unread Email',
        body: '-',
        isReaded: false
      }
    ]
  };

  it('should return a list of unread emails', () => {
    const result = unreadEmailsSelector(mockState);
    expect(result.length).to.be.equal(2);
  });
});
