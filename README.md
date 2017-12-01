# Talk FAC To Me

[Check out our app](https://talkfactome.herokuapp.com/)

### Founders and Coders Mentoring System

A simple web app with a node server and database that connects current and newly accepted students to alumni who are happy to give advice about a specifi topic.

#### User Journeys
As a member of FAC I want:
- To be able to access contact details (gitter handle) to connect with alumni about the course and life after FAC
- To view all available mentors
- To sort by category (Life at FAC, Freelancing, Internships, Junior Dev, Mentorship)

As an alumnus I want:
- To be able to add my details to the database as a mentor and select the relevant category I am willing to give advice about

Stretch Goal
- Alumni are able to add details and select more than one category they can be contacted about

#### Schema

We originally planned to have three tables, but due to time constraints currently have one table with all the relevant information in it:
id
name
cohort
gitter_handle
category

Our stretch goal is to populate our categories table so that multiple categories can be chosen.

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
