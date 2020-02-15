<template>
  <v-menu
    ref="cart"
    v-model="menu"
    :close-on-content-click="false"
    :min-width="100"
    :max-width="$vuetify.breakpoint.xsOnly ? '100%' : 540"
    :left="true"
    attach
    bottom
    content-class="elevation-18 cart-popout"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <base-btn
        aria-label="Cart"
        fab
        small
        v-bind="attrs"
        v-on="on"
      >
        <v-badge
          color="accent"
          left
        >
          <span
            v-if="itemCount"
            slot="badge"
            v-text="itemCount"
          />

          <v-icon v-text="mdiCart" />
        </v-badge>
      </base-btn>
    </template>

    <v-card flat>
      <v-list two-line>
        <v-list-item v-if="!itemCount">
          <v-list-item-title class="text-center">
            No Products Found
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          v-else
          :key="i"
        >
          <v-list-item-avatar
            class="hidden-xs-only"
            color="grey lighten-3"
            tile
            size="60"
          >
            <v-img
              v-if="item.variant.image"
              :src="item.variant.image.src"
            />
          </v-list-item-avatar>

          <v-list-item-content
            class="pr-3"
            style="flex: 1 0 150px;"
          >
            <v-list-item-title>
              <router-link
                :to="`/product/${item.handle}`"
                class="font-weight-medium text--primary text-decoration-none"
                @click.native="menu = false"
                v-text="item.title"
              />
            </v-list-item-title>

            <v-list-item-subtitle
              class="grey--text text--darken-2 body-2"
              v-text="`$${item.variant.price}`"
            />

            <v-list-item-subtitle
              v-if="(item.variants || []).length > 1"
              class="grey--text text--darken-1 overline"
              v-text="item.variant.title"
            />
          </v-list-item-content>

          <v-list-item-action style="flex: 1 1 56px; max-width: 56px;">
            <v-text-field
              :disabled="isLoading"
              :value="item.quantity"
              flat
              hide-details
              single-line
              solo-inverted
              type="number"
              @input="onInput($event, item)"
            />
          </v-list-item-action>

          <v-list-item-action>
            <v-btn
              :disabled="isLoading"
              aria-label="Remove Item from Cart"
              icon
              large
              @click="removeItem(item)"
            >
              <v-icon small>
                $vuetify.minus
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-row
        v-if="itemCount"
        align="center"
        class="px-3 pt-2"
      >
        <v-col
          class="pb-0 text-right"
          cols="12"
        >
          <v-responsive
            class="ml-auto"
            max-width="230"
          >
            <v-text-field
              ref="discount"
              :disabled="isLoading"
              :error-messages="hasAttemptedDiscount && !hasDiscount ? 'Invalid Discount' : ''"
              :readonly="hasValidDiscount"
              :value="appliedDiscount.code"
              color="white"
              flat
              label="Discount Code"
              single-line
              solo-inverted
              @input="onDiscountInput"
            >
              <template v-slot:prepend-inner>
                <v-expand-x-transition mode="out-in">
                  <v-responsive
                    v-if="hasDiscount"
                    width="24"
                  >
                    <v-icon
                      :disabled="isLoading"
                      small
                      @click="removeDiscount"
                    >
                      $vuetify.delete
                    </v-icon>
                  </v-responsive>
                </v-expand-x-transition>
              </template>

              <template v-slot:append>
                <v-fade-transition mode="out-in">
                  <v-progress-circular
                    v-if="discountIsLoading"
                    color="grey lighten-1"
                    indeterminate
                    size="20"
                    style="margin-top: 2px;"
                    width="2"
                  />

                  <v-icon
                    v-else-if="hasValidDiscount"
                    color="success"
                  >
                    $vuetify.complete
                  </v-icon>

                  <v-icon
                    v-else-if="hasAttemptedDiscount"
                    color="error"
                  >
                    $vuetify.error
                  </v-icon>
                </v-fade-transition>
              </template>
            </v-text-field>
          </v-responsive>
        </v-col>

        <v-expand-transition>
          <v-col
            v-if="hasValidDiscount"
            class="text-right py-0 d-flex align-center justify-end flex-wrap"
            cols="12"
          >
            <span class="body-2 font-weight-light grey--text">
              Products:&nbsp;
            </span>

            <v-responsive
              class="grey--text title text--darken-1 font-weight-medium shrink d-inline-flex justify-end"
              min-width="100"
              tag="span"
              v-text="`$${preDiscount.toFixed(2)}`"
            />

            <v-col
              cols="12"
              class="pa-0"
            />

            <span class="body-2 font-weight-light grey--text">
              Discount:&nbsp;
            </span>

            <v-responsive
              class="grey--text title text--darken-1 font-weight-medium shrink d-inline-flex justify-end"
              min-width="100"
              tag="span"
              v-text="`-$${totalDiscount.toFixed(2).slice(1)}`"
            />
          </v-col>
        </v-expand-transition>

        <v-col
          class="text-right pt-0 d-flex align-center justify-end"
          cols="12"
        >
          <span class="body-2 font-weight-light grey--text">
            Subtotal:&nbsp;
          </span>

          <v-responsive
            class="green--text headline text--darken-1 font-weight-medium shrink d-inline-flex justify-end"
            min-width="100"
            tag="span"
            v-html="`&nbsp;$${subtotal}`"
          />
        </v-col>

        <v-col cols="12">
          <!-- <v-btn
            :disabled="isLoading"
            :loading="isLoading"
            block
            color="primary"
            large
            target="_blank"
            rel="noopener"
            @click="menu = false"
          > -->
          <v-btn
            :disabled="isLoading"
            :href="checkout.webUrl"
            :loading="isLoading"
            block
            color="primary"
            large
            target="_blank"
            rel="noopener"
            @click="menu = false"
          >
            Checkout
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-menu>
</template>

<script>
  // Utilities
  import {
    call,
    get,
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiArrowRight,
    mdiCart,
  } from '@mdi/js'

  export default {
    name: 'CartPopout',

    data: vm => ({
      discount: null,
      hasAttemptedDiscount: false,
      isLoading: false,
      discountIsLoading: false,
      mdiArrowRight,
      mdiCart,
      menu: false,
    }),

    computed: {
      checkout: sync('cart/checkout'),
      itemCount: get('cart/itemCount'),
      products: get('products/products'),
      appliedDiscount () {
        return this.hasDiscount
          ? this.checkout.discountApplications[0]
          : {}
      },
      discountType () {
        if (!this.hasDiscount) return ''

        return this.appliedDiscount.targetType
      },
      hasDiscount () {
        if (!this.checkout.discountApplications) return false

        return this.checkout.discountApplications.length > 0
      },
      hasValidDiscount () {
        if (!this.hasDiscount) return false

        return this.appliedDiscount.applicable
      },
      items () {
        return this.checkout.lineItems.map(item => ({
          ...item,
          handle: (this.products.find(product => {
            return product.id === item.variant.product.id
          }) || {}).handle,
        }))
      },
      preDiscount () {
        const { lineItemsSubtotalPrice = {} } = this.checkout
        const { amount = 0 } = lineItemsSubtotalPrice

        return parseFloat(amount)
      },
      subtotal () {
        return this.checkout.subtotalPrice
      },
      totalDiscount () {
        if (!this.hasValidDiscount) return 0

        const originalPrice = Number((this.checkout.lineItemsSubtotalPrice || {}).amount || 0)
        const newPrice = Number(this.checkout.subtotalPrice)

        return newPrice - originalPrice
      },
    },

    watch: {
      itemCount (val, oldVal) {
        if (val > oldVal) this.menu = true
        this.$refs.cart.updateDimensions()

        if (!val) this.menu = false
      },
    },

    methods: {
      ...call('cart', {
        addDiscount: 'addDiscount',
        remove: 'removeItem',
        removeD: 'removeDiscount',
        updateItem: 'updateItem',
      }),
      onDiscountInput (val) {
        clearTimeout(this.discountTimeout)

        this.discountTimeout = setTimeout(async () => {
          this.setLoaders()

          await this.addDiscount(val)

          this.setLoaders(false)

          this.hasAttemptedDiscount = true
        }, 1000)
      },
      onInput (quantity, item) {
        quantity = Number(quantity)

        this.isLoading = true

        this.updateItem({
          id: item.id,
          quantity,
        }).finally(() => (this.isLoading = false))
      },
      async removeDiscount () {
        this.hasAttemptedDiscount = false
        this.setLoaders()

        await this.removeD()

        this.setLoaders(false)
      },
      async removeItem (item) {
        this.setLoaders()

        await this.remove(item)

        this.setLoaders(false)
      },
      setLoaders (val = true) {
        this.isLoading = val
        this.discountIsLoading = val
      },
    },
  }
</script>

<style>
  /* TODO: Remove once fixed in Vuetify */
  .cart-popout {
    /* margin-right: 8px; */
    z-index: 14 !important;
  }
  @media only screen and (max-width: 600px) {
    .cart-popout {
      left: 0 !important;
      min-width: 100vw !important;
      margin: 0 5px 0 5px !important;
    }
  }
</style>
