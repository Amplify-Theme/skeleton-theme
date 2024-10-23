export default  {
    name : 'step-1',
    template : `
      <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
      <div class="col-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="!stepOneValue ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 01</h5>
        </div>
        <!-- Product One -->
        <div class="mb-4 border p-4 p-lg-5 rounded-md">
          <div class="product-image position-relative">
            <img class="w-100 h-100" src="../images/custom-product/product-2.png" alt="">

            <div v-for="(value,index) in stepOne" :key="index" @click="$parent.handleStepOne(index)"
                 :class="[index, {'bg-danger' : value == '0' }, {'bg-success' : value != '0'}]"
                 class="position-absolute input-box ">{{ value }}
            </div>
          </div>
        </div>
        <div>
          <small class="text-danger text-uppercase fw-500 d-block mb-3">Required Field</small>
          <h6 class="text-uppercase">PLEASE NOTE THE DIRECTION OF THE MESH CROSS WIRES</h6>
        </div>
      </div>
      </div>

    `,

    props:['orderStep','stepOneValue','stepOne','handleStepOne'],
}