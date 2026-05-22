const express = require('express')
const cors = require('cors')
require('dotenv').config()

const passport = require('passport')
const session = require('express-session')
const googleStrategy = require('passport-google-oauth20').Strategy

const app = express()

app.use(cors(
    {
        origin: 'https://google-auth-mern-ogna.vercel.app/',
        credentials: true
    }
))

app.use(session(
    {
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    }
))

app.use(passport.initialize())
app.use(passport.session())


passport.use(
    new googleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://google-auth-alpha.vercel.app/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {

            console.log(profile);
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

//Route
app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
        prompt: 'select_account',
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'https://google-auth-mern-ogna.vercel.app/'
    }),
    (req, res) => {
        res.redirect('https://google-auth-mern-ogna.vercel.app/home')
    }
);

app.get('/user/info', (req, res) => {
    // console.log(req.user)
    res.status(200).json({ message: 'success', status: true, user: req?.user?._json })
})

app.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) {
            return res.send('error')
        }
        req.session.destroy((error) => {
            if (error) {
                return rres.send('error')
            }
        })
        res.clearCookie('connect.sid')
        res.status(200).json({ message: 'success', status: true })
    })

})
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!', status: true })
})

module.exports = app;
