# Talk FAC To Me

[Check out our app](https://talkfactome.herokuapp.com/)

### Founders and Coders Mentoring System

A simple web app with a node server and database that connects current and newly accepted students to alumni who are happy to give advice about a specific topic.

#### User Journeys
**As a member of FAC I want:**
- To be able to access contact details (gitter handle) to connect with alumni about the course and life after FAC
- To view all available mentors
- To sort by category (Life at FAC, Freelancing, Internships, Junior Dev, Mentorship)

**As an alumnus I want:**
- To be able to add my details to the database as a mentor and select the relevant category I am willing to give advice about

**Stretch Goal**
- As alumni I want to be able to select more than one category
- Alumni are able to edit and/or delete their entry

#### Schema

![](https://i.imgur.com/EaDQ7cS.png)


#### Security

Protect from script injections using Prepared Statements:
```
const postData = (name, cohortNumber, gitterHandle, talkInfo, cb) => {
  databaseConnection.query(
    'INSERT INTO mentors (name, cohort, gitter_handle, other) VALUES ($1, $2, $3, $4)',
    [name, cohortNumber, gitterHandle, talkInfo],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        console.log('postData running');
        cb(null, res);
      }
    }
  );
};
```

#### Tests
We carried out database testing with Tape and tested the server using Shot.

![](https://i.imgur.com/9VqMPaG.jpg)

#### What We Learned
- Cookies :cookie: :cookie: :cookie: :cookie: (setting, deleting)
- JWT authentication on all endpoints (protected vs unprotected routes)
- Password management (hashing, bcrypt)
