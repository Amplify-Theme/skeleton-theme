export default  {
    name : 'step-1',
    template : `
      <div :class="orderStep === 1 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
      <div class="col-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="gasketStatus ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 01</h5>
        </div>
        <p class="fw-600 text-dark mb-4 text-capitalize">Select the Gasket Style You Need</p>
      </div>
      <div v-for="(data,index) in stepOneProductGaskets" class="col-md-3 mb-3 mb-md-0" :key="index">
        <div @click="$parent.gasketStatus = data.title; $parent.nextStep = true" :class="data.title === gasketStatus && 'active'"
             class="gasket-type position-relative p-4 d-flex flex-column justify-content-center align-items-center"
             type="button">
          <img class="w-100 mw-200" :src="'../images/custom-product/gaskets/'+ data.img" :alt="data.title">
          <h6 class="mb-2 fw-600">{{ data.title }}</h6>
          <h6 class="mb-0 fw-600">{{ data.type }}</h6>
        </div>
      </div>
      </div>
      
    `,

    props:['orderStep', 'stepOneProductGaskets','gasketStatus','nextStep'],
}