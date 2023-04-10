<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="position_center">
        <h2 class="title is-4 mt-5">Edição de Usuário</h2>

        <div v-if="error != undefined">
            <div class="notification is-danger is-light" style="width: 50%; margin-left: 25%;">
                {{ error }}
            </div>
        </div>

        <div v-if="success != undefined">
            <div class="notification is-primary is-light" style="width: 50%; margin-left: 25%;">
                {{ success }}
            </div>
        </div>

        <br>
        <div class="field">
            <p class="control">
                <input class="input input_large" type="text" placeholder="digite o novo nome" v-model="name">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="email" placeholder="digite o novo e-mail" v-model="email">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="number" placeholder="Escolha o cargo 0 ou 1" v-model="role">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <button @click="update()" class="button is-success btn_large">Editar</button>
            </p>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {


        var request = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.get("http://localhost:8686/user/" + this.$route.params.id, request).then((res) => { // Verificando se o usuário com o ID digitado existe.
            console.log(res);
            this.name = res.data.name;
            this.email = res.data.email;
            this.role = res.data.role;
            this.id = res.data.id;
        }).catch((err) => {
            console.log(err.response);
            this.$router.push({ name: 'users' })
        });
    },
    data() {
        return {
            name: '',
            email: '',
            role: '',
            id: -1,
            error: undefined,
            success: undefined
        }
    },

    methods: {
        update() {
            axios.post("http://localhost:8686/user", {
                name: this.name,
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