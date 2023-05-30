---
id: ana6t1rr
title: Zepz coding document
file_version: 1.1.2
app_version: 1.9.14
---

# Installation and /Running the Application

1.  git clone [https://github.com/abdulbasit0-UI/zepz-coding.git](https://github.com/abdulbasit0-UI/zepz-coding.git)

2.  cd zepz-coding

3.  npm install

4.  npm run start
<br/>

<br/>

# Tests

1.  cd zepz-coding

2.  npm run test
<br/>

<br/>

Test to see if there are 20 users in the users array.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/__tests__/UserCard.test.tsx
```tsx
228    test("Users must be 20", () => {
229      render(
230        <>
231          {mock.map((u) => (
232            <UserCard key={u.account_id} user={u} />
233          ))}
234        </>
235      );
236      const userCard = screen.getAllByTestId("user-card");
237      expect(userCard).toHaveLength(20);
238    });
```

<br/>

# Tech Stack

React, Typescript, Jest, React Testing Library

<br/>

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBemVwei1jb2RpbmclM0ElM0FhYmR1bGJhc2l0MC1VSQ==/docs/ana6t1rr).