<template>
  <base-section id="licenses">
    <v-container class="page pb-5 mb-12">
      <base-heading>Licenses</base-heading>

      <base-subheading>Standard License</base-subheading>

      <base-text>
        Digital products purchased under the Standard License may be used one time in an End Product for Personal Use (an End Product that does not charge End Users).
      </base-text>

      <base-subheading>Extended License</base-subheading>

      <base-text>
        Digital products purchased under the Extended License may be used an unlimited amount of times for Personal Use, and one time to create a single End Product that does charge End Users.
      </base-text>

      <base-subheading>Unlimited License</base-subheading>

      <base-text>
        An Unlimited License can be used an unlimited amount of times for Personal Use, Commercial Use, and Commercial End Products.
      </base-text>

      <v-sheet elevation="2">
        <v-simple-table class="mb-6">
          <thead>
            <tr class="text-left">
              <th>License</th>
              <th>Personal Use</th>
              <th>Commercial Use</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(license, i) in licenses"
              :key="i"
            >
              <td>
                <strong v-text="license[0]" />
              </td>
              <td
                v-for="(data, j) in license.slice(1)"
                :key="j"
                v-text="data"
              />
            </tr>
          </tbody>
        </v-simple-table>
      </v-sheet>

      <base-subheading>
        General FAQ
      </base-subheading>

      <v-expansion-panels class="mb-6">
        <v-expansion-panel
          v-for="([q, a], i) in faqs"
          :key="i"
        >
          <v-expansion-panel-header>
            <span
              class="title"
              v-text="q"
            />
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <div v-text="a" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-col
        class="mx-auto text-center mb-n12"
        cols="12"
      >
        <base-btn @click="$vuetify.goTo(0)">
          Scroll to Top
        </base-btn>
      </v-col>
    </v-container>

    <base-find-your-answer />
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'Licenses',

    metaInfo: genMetaInfo(
      'Licenses',
      'Digital products purchased under the Standard License may be used one time in an End Product for Personal Use (an End Product that does not charge End Users).',
      'vuetify theme licenses, vuetify store licenses'
    ),

    data: () => ({
      licenses: [
        ['Standard', '1 Project', 'Not Applicable'],
        ['Extended', 'Unlimited', '1 Project'],
        ['Unlimited', 'Unlimited', 'Unlimited'],
      ],
      faqs: [
        [
          'Can I use a purchased item in a freelance project or contract work for a client?',
          'Yes. However, if the client intends to charge End Users in any way from the End Product you create, you will need to purchase an Extended License. If you create the End Product for a client, your rights to purchased Items are transferred from you to your client.',
        ],
        [
          'What is an End Product?',
          'An End Product is work that is designed or developed for a single, paid client. This website can not be resold as a product to multiple users. For more information on selling products to multiple users, please see <strong>What is an Unlimited License?</strong>',
        ],
        [
          'What are the End Product requirements?',
          'An End Product must be a unique implementation of the Item, often requiring limited copy and content changes. For example, if you purchase a resume template, you may use the Item for yourself or a client after having input personal information (you may not resell it as stock).',
        ],
        [
          'What is Personal Use, Commerical Work, Contracted Work, Client Work, etc.?',
          'If the created site can not charge users in any way, it is considered for Personal Use and a Regular License can be used. For End Products that can charge users, such as a Software as a Service application, or an e-commerce site, you should use an Extended License. For any End Products that will be sold in its entirety, such as creating software that is distributed digitally, use an Unlimited License.',
        ],
        [
          'What is a Standard License?',
          'A Standard License is for an End Product that does not charge users in any way.',
        ],
        [
          'What is an Extended License?',
          'An Extended License is for an End Product that is not distributed but can charge users. ',
        ],
        [
          'What is an Unlimited License?',
          'An End Product For Sale can be either a digital design or physical item that you and/or your client intend to sell to more than a single person (wholesale, drop-shipping, etc.). For example, if you purchase a theme and include it in a website designed for a single, paid client, this is not considered an End Product for Sale. If you purchase that same theme and incorporate it into a calendar that you design and sell to multiple people, that is considered an End Product for Sale.',
        ],
      ],
    }),

    computed: {
      from: sync('route/from'),
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: 'Licenses',
        src: this.defaultSrc,
      })
    },
  }
</script>
