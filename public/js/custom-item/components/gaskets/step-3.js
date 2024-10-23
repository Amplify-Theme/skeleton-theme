export default  {
    name : 'step-3',
    template : `
      <div :class="orderStep === 3 ? 'order-step-block' : 'order-step-d-none'" v-if="retainerStatus" class="row mb-4 mb-sm-5">
      <div class="col-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="gasketProfileStatus ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
        </div>
        <p class="fw-600 text-dark mb-4 text-capitalize">Select Your Gasket Profile Below</p>
      </div>
      <div v-for="(data,index) in stepThreeProductGasketProfile" class="col-md-3 mb-4" :key="index">
        <div @click="$parent.gasketProfileStatus=data.order" :class="data.order === gasketProfileStatus && 'active'"
             class="gasket-type position-relative p-4 d-flex flex-column justify-content-center"
             type="button">
          <img class="w-100 mw-200 align-self-center" :src="'../../../images/custom-product/gaskets/'+ data.img" :alt="data.title">
          <h6 class="fw-600">ORDER#: {{ data.order }}</h6>
          <h6 class="fw-600">COLOR: {{ data.color }}</h6>
          <h6 class="fw-600">MATERIAL: {{ data.material }}</h6>
          <h6 class="fw-600">NOTE: {{ data.note }}</h6>
        </div>
      </div>
      <!--FINAL-->
      <div v-if="gasketProfileStatus" class="col-12">
        <div class="row">
          <div class="col-12">
            <h6 class="text-danger">You Have Chosen This Profile:</h6>
          </div>
          <div v-for="(data,index) in stepThreeProductGasketProfileFinal" class="col-md-4 mb-4" :key="index">
            <div :class="gasketProfileStatus && 'active'"
                 class="gasket-type remove-selected-text position-relative p-4 d-flex flex-column justify-content-center align-items-center"
                 type="button">
              <img class="w-100 mw-200" :src="'../../../images/custom-product/gaskets/'+ data.img"
                   :alt="data.title">
              <h6 class="fw-600">{{ data.order }}</h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">LIST PRICE PER FOOT:</div>
                <input :disabled="true" v-model="stepThreeProductGasket" type="text" placeholder="0"
                       class="form-control w-90">
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    `,

    props:['retainerStatus','gasketProfileStatus','orderStep','stepThreeProductGasketProfileFinal','stepThreeProductGasketProfile','stepThreeProductGasket'],
}