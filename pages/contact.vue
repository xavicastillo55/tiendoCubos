<template>
  <div>
    <h1>Welcome to the Contact Page</h1>
    <div class="d-flex flex-column align-center">
      <section id="Tiendas">
        <p class="text-h5">Nuestas tiendas</p>
        <div class="d-flex" style="width: 100%;">
          <div>Calle 72</div>
          <div>Calle 45</div>
        </div>
      </section>
      <!-- <section id="FAQ">
        <p class="text-h5">FAQ</p>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            title="Item"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></v-expansion-panel>
        </v-expansion-panels>
      </section> -->
      <div class="mt-3" style="min-width: 50%;">
        <p class="text-h5">Contact Form</p>
        <v-form
          v-model="valid"
          action="https://getform.io/f/a65ef1a2-ac7f-467b-8313-4e01b0d947e1"
          method="POST"
        >
          <div class="d-flex flex-column">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nombre"
              name="Nombre"
              required
              prepend-inner-icon="mdi-account"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="email"
              name="Email"
              :rules="emailRules"
              placeholder="contact@example.com"
              label="E-mail"
              required
              variant="outlined"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-textarea
              color="black"
              name="message"
              label="Message"
              v-model="message"
              variant="outlined"
            ></v-textarea>
            <v-btn
              class="px-8 px-3 mr-auto btn-grad font-weight-bold"
              type="submit"
            >
              Submit
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (value) => {
        if (value) return true;
        return "Name is requred.";
      },
      (value) => {
        if (value?.length > 8) return true;
        return "Name must be less at leat 8 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;
        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;
        return "E-mail must be valid.";
      },
    ],
    message: "",
  }),
};
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #d500f9 0%,
    #aa00ff 51%,
    #d500f9 100%
  );
  width: 20%;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
