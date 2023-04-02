<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-deprecated-filter -->
<template>
    <div>
        <h1 class="title is-4 ">Usuários</h1>

        <div class="espacing">
            <table class="table is-bordered is-striped">
                <thead>
                    <tr>
                        <th style="text-align: center;">Nome</th>
                        <th style="text-align: center;">Email</th>
                        <th style="text-align: center;">Cargo</th>
                        <th style="text-align: center;">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">

                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td v-if="user.role == 0">Padrão</td>
                        <td v-else-if="user.role == 1">Administrador</td>
                        <td>
                            <button class="button is-warning is-light is-normal">Editar</button>
                            <button class="button is-danger is-light is-normal spacing_item">Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Deleção de Usuário</p>
                        <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <h1 class="title is-4">Você realmente deseja deletar?</h1>
                        <p>A deleção do usuário é permanente e irreversível, caso seja efetuada não poderá ser desfeita, caso queira prosseguir com a exclusão basta clicar no botão abaixo </p>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Confirmar</button>
                        <button class="button">Cancel</button>
                    </footer>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created() {

        var request = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.get("http://localhost:8686/user", request).then((res) => {
            console.log(res);
            this.users = res.data; // O array de usuários
        }).catch((err) => {
            console.log(err);
        })
    },

    data() {
        return {
            users: []
        }
    }
}
</script>


<style scoped>
.espacing {
    margin-left: 29%;
}

.spacing_item {
    margin-left: 10px;
}
</style>