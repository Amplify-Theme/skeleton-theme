export default  {
    name : 'step-5',
    template : `
      <div :class="orderStep === 4 ? 'order-step-block' : 'order-step-d-none'" v-if="stepFourProductGasketProfile" class="row mb-4 mb-sm-5">
      <div class="col-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="!stepOneValue ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 05 </h5>
        </div>
        <h6 class="mb-4">Provide Outside Dimensions (X AND Y)</h6>

        <div class="mb-4 border p-4 p-lg-5 rounded-md">
          <div class="product-image position-relative">
            <img class="w-100 h-100" src="../images/custom-product/gaskets/step-5/step-1.png" alt="">

            <div v-for="(value,index) in stepFiveProductGasketModal" :key="index" @click="handleStepOne(index)"
                 :class="[index, {'bg-danger' : value == '0' }, {'bg-success' : value != '0'}]"
                 class="position-absolute input-box ">{{ value }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">TOTAL MATERIAL PER FOOT</div>
                <input :disabled="true" type="text" placeholder="0"
                       class="form-control w-90">
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    `,

    props:['orderStep', 'stepFourProductGasketProfile', 'stepOneValue','stepFiveProductGasketModal', 'handleStepOne']
}