

function getJSON(){
    // fetch('sample.json' )
    // .then(function(res){
    //     return res.json();
    // })
    // .then(function(data){
    //     console.log(data );
    // })
    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => { return res.json() })
        .then((data) => { 
        let result = '<h2> User Info </h2>';
        data.forEach((user) => {
            result +=
             `<h4> User ID: ${user.id} </h4>
             <ul>
               <li id="user">
               <a href="index.html?postId=${user.id}">
               User tittle : ${user.title}
               </a>
               </li>
               <li> User body : ${user.body} </li>
            </ul>
             `;
        document.getElementById('result').innerHTML = result;
        });
        })

    
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
    }

var userId = getUrlVars()["postId"];
if (userId === undefined){
    getJSON();
} else {
    gotoUser(userId);
}

function gotoUser(userId){
    result = '';
    document.getElementById('result').innerHTML = result;
    fetch('https://jsonplaceholder.typicode.com/posts/'+userId)
      .then((res) => { return res.json() })
      .then((data) => { 
          let result = '<h2> User Info </h2><div><a href="index.html">НАЗАД</a></div>';
          result +=
               `<h4> User ID: ${data.id} </h4>
               <ul>
                 <li>User tittle : ${data.title}</li>
                 <li> User body : ${data.body} </li>
              </ul>
               `;
          document.getElementById('result').innerHTML = result;
     })

     fetch('https://jsonplaceholder.typicode.com/posts/'+userId+'/comments')
      .then((res) => { return res.json() })
      .then((data) => { 
          let comments = '<h2> User Comments </h2>';
          data.forEach((comment) => {
            comments +=
            `<div>
            <ul>
              <li>User comment : ${comment.name}</li>
              <li> User email : ${comment.email} </li>                 
              <li> Comment : ${comment.body} </li>
           </ul>
            </div>               
            `;
            document.getElementById('comments').innerHTML = comments;
          }
        );
          
     })
}

