<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="position_center">
        <h2 class="title is-4 mt-5">Cadastro de Usuário</h2>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="text" placeholder="Digite o nome do usuário">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="email" placeholder="email@email.com">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="password" placeholder="*********">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input class="input input_large" type="number" placeholder="Escolha o cargo 0 ou 1">
            </p>
        </div>

        <div class="field">
            <p class="control">
                <button class="button is-success btn_large">Cadastrar</button>
            </p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.input_large,
.btn_large {
    width: 50%;
}
.position_center{
    text-align: center;
}
</style>