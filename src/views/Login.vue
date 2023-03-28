<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h2 class="title is-4 mt-5">Login</h2>

        <div v-if="error != undefined">
            <div class="notification is-danger is-light">
                {{ error }} <br>
            </div>
        </div>

        <div v-if="success != undefined">
            <div class="notification is-primary is-light">
                {{ success }} <br>
            </div>
        </div>

        <br>
        <div class="field">
            <p class="control ">
                <input class="input input_large" type="email" placeholder="email@teste.com" v-model="email">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="password" placeholder="********" v-model="password">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <button @click="login()" class="button is-success btn_large">Login</button>
            </p>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: undefined,
            success: undefined
        }
    },

    methods: {
        login() {
            axios.post("http://localhost:8686/login", {
                password: this.password,
                email: this.email,
            }).then((res) => {
                localStorage.setItem('Token: ', res.data.token);
                this.success = "Login efetuado!";
            }).catch((err) => {
                let msgErro = err.response.data.err;
                this.error = msgErro;
            });
        }
    }
}
</script>

<style scoped>
.input_large,
.btn_large {
    width: 50%;
}

.position_center {
    text-align: center;
}
</style>