<template>
    <div class="auth">
        <div class="form">
            <div class="form__item">
                <label class="form__item__label">Логин</label>
                <input class="form__item__input" type="text" v-model="model.login"> 
            </div>
           <div class="form__item">
                <label class="form__item__label">Пароль</label>
                <input class="form__item__input" type="password" v-model="model.password"> 
            </div>
            <div class="none-valid" v-if="valid === false">
                Неправильные имя пользователя или пароль
            </div>
            <button class="form__btn" @click="login">Войти</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            model: {
                login: '',
                password: ''
            },
            valid: null,
        }
    },
    methods: {
        ...mapActions(['getUser']),
        ...mapMutations(['setUser']),
        async login() {
            // this.getUser(this.model)
            const response = await fetch(`http://164.90.171.231:8080/api/check?log=${this.model.login}&pas=${this.model.password}`)
            let json   
            try {
                json = await response.json()
            }
            catch {
                this.valid = false
            }
            if (json) {
                this.setUser(json)
                this.$router.push('/')
            } 
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/images/auth-bg.jpeg');
    background-repeat: no-repeat;
    background-size: 100vw;
    .none-valid {
        color: #000000;
        padding: 10px 20px;
        margin-top: 20px;
        font-size: 15px;
        border-radius: 5px;
        background: #fe8fff;
    }
    .form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: $auth-form-bg;
        width: 600px;
        border-radius: 50%;
        height: 600px;
        &__item {
            display: flex;
            flex-direction: column;
            &__label {
                font-size: 32px;
                color: #fff;
            }
            &__input {
                border: none;
                border-radius: 5px;
                font-size: 24px;
            }
            & + .form__item {
                margin-top: 50px;
            }
        }
        &__btn {
            margin-top: 30px;
            border: none;
            font-size: 24px;
            padding: 10px 40px;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
            background-color: $auth-form-btn;
        }
    }
}
</style>