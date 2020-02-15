<template>
  <v-footer
    id="core-footer"
    class="py-12"
    dark
    inset
  >
    <v-container class="px-0">
      <v-row justify="center">
        <v-col
          style="text-align: center;"
          cols="12"
          md="5"
        >
          <strong class="mb-3 d-block">Goody 2 Shoes</strong>

          <div class="body-2">
            221 East Moulton Street SE<br>
            Decatur, AL 35601<br>
            (256) 341-0190<br>
          </div><br>
          <v-img
            src="@/assets/footerImg2.jpg"
            style="margin: 0 auto;"
            max-height="300"
            max-width="300"
          />
        </v-col>

        <v-col
          style="text-align: center;"
          cols="12"
          md="7"
        >
          <v-row>
            <v-col
              v-for="(section, i) in sections"
              :key="i"
              class="mt-n3"
              cols="6"
              md="3"
            >
              <strong
                class="d-block mb-6"
                v-text="section.heading"
              />

              <div
                v-for="(child, j) in section.children"
                :key="j"
                class="body-2 mb-4"
              >
                <router-link
                  v-if="child.to"
                  :to="child.to"
                  class="text-capitalize"
                  v-text="child.text"
                />
                <a
                  v-else-if="child.refund"
                  class="text-capitalize"
                  target="_blank"
                  rel="noopener"
                  @click="dialog = true"
                  v-text="child.text"
                />
                <a
                  v-else-if="child.shipping"
                  class="text-capitalize"
                  target="_blank"
                  rel="noopener"
                  @click="dialog2 = true"
                  v-text="child.text"
                />

                <a
                  v-else
                  :href="child.href"
                  class="text-capitalize"
                  target="_blank"
                  rel="noopener"
                  v-text="child.text"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="mb-8 my-md-12" />

      <v-row align="center">
        <v-col
          class="ml-auto mr-auto ml-md-0 d-flex align-center"
          cols="auto"
        >
          <span class="mr-3 overline">powered by:</span>

          <a
            aria-label="Link to Shopify"
            href="https://www.shopify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              contain
              width="100"
              src="https://d2z6c3c3r6k4bx.cloudfront.net/uploads/account/logo/1007314/41c7844bc61708da4cd7e0ba15c14957.png"
            />
          </a>
        </v-col>

        <v-col
          class="ml-auto mr-auto mr-md-0"
          cols="auto"
        >
          &copy; Copyright {{ date }} Goody 2 Shoes Decatur
          <span class="hidden-sm-and-down">|</span>
          <br class="hidden-md-and-up">
          Made by <a
            @click="openPortfolio"
          >Jared Grimes</a>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="375px"
    >
      <v-card>
        <v-card-title class="headline">
          Refund Policy
        </v-card-title>
        <v-card-text>
          14 Day Return Policy: Reg Price Items may be returned/exchanged within 14 days of purchase date for STORE CREDIT ONLY. Items must have original tags and be unworn. Buyer is responsible for return shipping cost.<br><br>

          Sale/Clearance Items, Intimates, and Jewelry are FINAL SALE and are not eligible for return or exchange.<br><br>

          Please include invoice number and customer name for reference when shipping a return.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      persistent
      max-width="375px"
    >
      <v-card>
        <v-card-title class="headline">
          Shipping Policy
        </v-card-title>
        <v-card-text>
          Standard Shipping {5-7 Days}: $6.00
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-footer>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'CoreFooter',

    data: () => ({
      date: (new Date()).getFullYear(),
      dialog: false,
      dialog2: false,
    }),

    computed: {
      socialMedia: sync('app/socialMedia'),
      collections () {
        const collections = sync('collections/collections').get.call(this) || []

        return collections.filter(collection => {
          return ![
            process.env.VUE_APP_SHOPIFY_DEFAULT_COLLECTION,
            process.env.VUE_APP_SHOPIFY_FEATURED_COLLECTION,
          ].includes(collection.handle)
        }).sort((a, b) => {
          if (a.title > b.title) return 1
          if (a.title < b.title) return -1
          return 0
        })
      },
      sections () {
        return [
          {
            heading: 'General',
            children: [
              { to: { name: 'About' }, text: 'About Us' },
              { to: { name: 'Contact' }, text: 'Contact Us' },
              { refund: true, text: 'Refunds', header: 'Refund Policy' },
              { shipping: true, text: 'Shipping', header: 'Shipping Policy' },
            ],
          },
          {
            heading: 'Product Collections',
            children: (this.collections || []).map(collection => ({
              text: collection.title,
              to: {
                name: 'Collections',
                params: { handle: collection.handle },
              },
            })),
          },
          {
            heading: 'Social',
            children: [
              ...this.socialMedia,
            ],
          },
        ]
      },
    },
    methods: {
      openPortfolio () {
        window.open('https://devjared1.web.app')
      },
    },
  }
</script>

<style lang="sass">
  #core-footer
    a
      color: #FFFFFF
      text-decoration: none
</style>
