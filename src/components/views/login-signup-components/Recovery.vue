<template lang="pug">
.container-fluid.w-100.h-100
  .container-recovery
    form.form-recovery(role='form', @submit.prevent="validateForm('form-recovery')", data-vv-scope="form-recovery")
      .row.pt-4
        .col
          .form-group.has-danger
            label.pt-2.pb-2(for='email') Introduce tu correo electrónico
            .input-group.mb-2.mt-1
              input#email.form-control(type='email', name='email', placeholder='you@example.com', v-validate="'required|email'", v-model="email", autofocus='')
          .form-control-feedback
            span.text-danger.align-middle(v-show="errors.has('form-recovery.email')")
              small {{ errors.first('form-recovery.email') }}
      .row.d-flex.justify-content-center.mt-3.mb-5
        .col-10
          button.mt-2.btn.btn-block.btn-dark(type='submit') Enviar
    modal(v-if="showModal" )
      h2(slot="header") ¡Gracias!
      button.btn.btn-dark(slot="button" @click="showModal = false") Cerrar
      h4(slot="body") Por favor revise su correo electrónico.
</template>

<script>
import modal from './modal-component'
export default {
  name: 'recovery-page',
  components: {
    modal
  },
  data () {
    return {
      email: null,
      showModal: null
    }
  },
  methods: {
    validateForm (scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          console.log(result)
          this.showModal = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  border-right: 1px solid rgb(231, 231, 231);
  border-left: 1px solid rgb(231, 231, 231);
  border-bottom: 1px solid rgb(231, 231, 231);
  width: 400px;
}
</style>
