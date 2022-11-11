import React from 'react';
import { Helmet } from 'react-helmet';
import  './Blog.css'

const Blog = () => {
    return (
        <div className="main-contain">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
            </Helmet>
        <div className='container pt-2'>
            <div className='question'>
                <h3 className="question-text">Difference between SQL and NoSQL</h3>
                    <h6>
                    SQL is the programming language used to interface
                     with relational databases. (Relational databases 
                     model data as records in rows and tables with logical
                      links between them). NoSQL is a class of DBMs that
                       are non-relational and generally do not use SQL.
                    </h6>
             </div>
            <div className='question'>
                <h3 className="question-text">What is JWT, and how does it work?</h3>
                <h6>
                 JWT or JSON Web Token, is an open standard used
                 to share security information between two parties
                 — a client and a server. Each JWT contains encoded 
                 JSON objects, including a set of claims. JWTs are 
                 signed using a cryptographic algorithm to ensure that
                  the claims cannot be altered after the token is issued.
                  ffer from other web tokens in that they contain a set of claims.
                   Claims are used to transmit information between two parties.
                    What these claims are depends on the use case at hand.
                     For example, a claim may assert who issued the token, 
                     how long it is valid for, or what permissions the client 
                     has been granted .
                </h6>
            </div> 
            <div className='question'>
                <h3 className="question-text"> What is the difference between javascript and NodeJS?</h3>
                <h6>
                    1. nodejs
                NodeJS is a cross-platform and opensource Javascript
                 runtime environment that allows the javascript to be 
                 run on the server-side. Nodejs allows Javascript code 
                 to run outside the browser. Nodejs comes with a lot of
                  modules and mostly used in web development.
                  2.javascript
                  Javascript is a Scripting language. It is mostly
                   abbreviated as JS. It can be said that Javascript 
                   is the updated version of the ECMA script. Javascript
                    is a high-level programming language that uses the 
                    concept of Oops but it is based on prototype inheritance. 
                </h6>           
           </div>
            <div className='question'>
                <h3 className="question-text">
                How does NodeJS handle multiple requests at the same time?
                </h3>
                <h6>
                Consider the following situation 1- There are many endpoints
                 and one of them is time consuming and responds in a few seconds.
                  2- Suppose, 100 clients simultaneously make requests to my endpoints,
                   which one of them takes a considerable amount of time.
                </h6>
            </div>
        </div>
    </div>
    );
};

export default Blog;