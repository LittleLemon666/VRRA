<template>
<!--背景圖-->
<v-app>
<div class = "note" :style = "note">
<!--login框，表單+tab標籤頁的組合-->
    <div class = "loginFrame">
        <el-form ref = "AccountForm" :model = "account" :rules = "rules" label-position = "left" label-width = "0px" class = "demo-ruleForm login-container">
       <!--tab標籤-->
            <img src="../assets/logo.jpg" width="100%" height="30%">

            <el-form-item prop = "username">
                <el-input type = "text" v-model = "account.username" auto-complete = "off" placeholder = "Acount"></el-input>
            </el-form-item> 
            <el-form-item prop = "password">
                <el-input type = "password" v-model = "account.password" auto-complete = "off" placeholder = "Password" error></el-input>
            </el-form-item>
            <!--el-checkbox v-model = "checked" checked class = "remember">記住密碼</el-checkbox-->
            <p v-show="error_msg!==''" v-text="error_msg"></p>
            <div>
                <v-layout justify-end row0>
                    <a @click = "signup" class = "Signup">Sign up？</a>
                </v-layout>
            </div>
            <el-form-item style = "width:100%;">
                <el-button type = "primary" style = "width:100%;" @click = "login">Sign in</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</v-app>

</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            logining : false,
            note: {
                position:"absolute",
                top:"0px",
                left:"0px",
                width: "100%",
                height:"100%",
                backgroundImage: "url(" + require("../assets/vrra_background.jpg") + ")",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            },
            account : {
                username:'',
                password:'',
            },
            rules: {
                username :[
                    {required: true, message: 'Type your account', trigger: 'blur'},
                    //{ validator: validaePass }
                ],
                password: [
                    {required: true, message: 'Type your password', trigger: 'blur'},
                    //{ validator: validaePass2 }
                ]
            },
            checked: false,
            error_msg: ''
        };
        
    },
    // mounted: function() {
    //     console.log('Starting connection to WebSocket Server');
    //     this.connection = new WebSocket('ws://localhost:8080/');

    //     this.connection.onmessage = function(event) {
    //         console.log('Server message : ' + event.data);
    //     }
    // },
    methods: {
        login() {
            this.$emit('Login', this, this.account.username, this.account.password)
            // this.loginResponse(3) // for test
            // this.connect('ws://' + location.host + '/socket/websocket/030', { format: 'json' })
        },
        loginResponse(state, firstName, lastName, email) {
            this.error_msg = '';
            if (state === '0') {
                this.$userName = this.account.username;
                this.$firstName = firstName;
                this.$lastName = lastName;
                this.$email = email;
                this.$router.replace('/home');
            }
            else if (state === '1') {
                this.error_msg = 'wrong password';
            }
            else if (state === '2') {
                this.error_msg = 'didn\'t find account';
            }
            else if (state === '3') {
                this.$router.replace('/home');
            }
        },
        signup() {
            let data = {
                fromSite: 'login'
            }
            this.$router.params = data;
            this.$router.replace('/signup');
        }
    }
}</script>

<style>

.login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 550px;
    padding: 35px 35px 15px 35px;
    background: #fff
    ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.signup{
    width:550px;
    text-align:right;
    font-size:14px;
    font-family:PingFang SC;
}

.signupFor{
    margin-bottom: 10px;
    margin-left: 80%;
    padding-bottom: 10px;
}

</style>