<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="position_center">
        <h2 class="title is-4 mt-5">Cadastro de Usuário</h2>

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
            <p class="control">
                <input class="input input_large" type="text" placeholder="nome" v-model="name">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="email" placeholder="email@email.com" v-model="email">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="password" placeholder="*********" v-model="password">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="number" placeholder="Escolha o cargo 0 ou 1" v-model="role">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <button @click="register()" class="button is-success btn_large">Cadastrar</button>
            </p>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
            role: 0,
            error: undefined,
            success: undefined
        }
    },

    methods: {
        register() {
            axios.post("http://localhost:8686/user", {
                name: this.name,
                password: this.password,
                email: this.email,
                role: this.role,
            }).then((res) => { 
                console.log(res) 
                this.success = "Usuário cadastrado com sucesso!"
            }).catch((err) => { 
                let msgErro = err.response.data.msg
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