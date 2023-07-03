//* eslint-env mocha */
'use strict'

const { WeightedAverages } = require('../../../lib')
const testModel = require('../../helpers/test_model')
const testModelValidation = require('../../helpers/test_model_validation')

describe('WeightedAverages model', () => {
  testModel({
    model: WeightedAverages,
    orderedFields: [
      'tradeCount', 'sumBuyingSpent', 'sumBuyingAmount', null,
      'sumSellingSpent', 'sumSellingAmount', null,
      'buyingWeightedPrice', 'sellingWeightedPrice'
    ]
  })

  testModelValidation({
    model: WeightedAverages,
    validData: {
      tradeCount: new Array(...(new Array(5))).map(() => Math.random()),
      sumBuyingSpent: new Array(...(new Array(5))).map(() => Math.random()),
      sumBuyingAmount: new Array(...(new Array(5))).map(() => Math.random()),
      sumSellingSpent: new Array(...(new Array(5))).map(() => Math.random()),
      sumSellingAmount: new Array(...(new Array(5))).map(() => Math.random()),
      buyingWeightedPrice: new Array(...(new Array(5))).map(() => Math.random()),
      sellingWeightedPrice: new Array(...(new Array(5))).map(() => Math.random())
    }
  })
})
