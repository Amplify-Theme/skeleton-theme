export default  {
    name : 'step-2',
    template : `

      <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4">
      <div class="col-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="retainerStatus ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
        </div>
        <p class="fw-600 text-dark mb-4 text-capitalize">Select the Retainer-Mounted Gasket Profile You Need</p>
      </div>
      <div v-for="(data,index) in stepTwoProductRetainer" class="col-md-3 mb-4" :key="index">
        <div @click="$parent.retainerStatus=data.title; $parent.nextStep = true" :class="data.title === retainerStatus && 'active'"
             class="gasket-type position-relative p-4 d-flex flex-column justify-content-center align-items-center"
             type="button">
          <img class="w-100 mw-200" :src="'../images/custom-product/gaskets/'+ data.img" :alt="data.title">
          <h6 class="fw-600">{{ data.title }}</h6>
        </div>
      </div>
      </div>
      
    `,

    props:['retainerStatus','orderStep','stepTwoProductRetainer','nextStep'],
}