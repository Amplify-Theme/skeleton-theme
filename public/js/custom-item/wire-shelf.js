import CustomModal from './components/custom-modal.js';
import WireShelfStepOne from './components/wire-shelf/step-1.js';
import WireShelfStepTwo from './components/wire-shelf/step-2.js';
export default {
    name    : 'WireShelf',
    template: `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-wire-shelf">
      <div class="row">
        <div class="col-12">
          <p class="fw-600 text-dark mb-5 text-capitalize">CREATE YOUR CUSTOM wire shelf</p>

          <!--STEP 01-->
         <WireShelfStepOne
             :orderStep="orderStep"
             :stepOneValue="stepOneValue"
             :stepOne="stepOne"
             :handleStepOne="handleStepOne"
         />
          
          <!--STEP 02-04-->
          <WireShelfStepTwo
            :orderStep="orderStep"
            :stepTwo="stepTwo"
            :stepOneValue="stepOneValue"
            :stepThree="stepThree"
            :stepFour="stepFour"
          />
          
          <!-- NEXT-PREV BUTTON -->
          <div class="d-sm-none d-flex align-items-center justify-content-between mt-5">
            <button :disabled="orderStep===1" @click="handleNextPrev(orderStep,'prev')"
                    :class="orderStep > 1 ? 'btn-primary' : 'btn-secondary' " class="w-90 m-0 btn btn-sm">Prev
            </button>
            <div class="d-flex gap-3">
              <span :class="orderStep === 1 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 2 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
            </div>
            <button v-if="orderStep === 2" type="submit" class="m-0 btn btn-primary btn-sm w-90" :disabled="!stepFour">
              Submit
            </button>
            <button v-else @click="handleNextPrev(orderStep,'next')" class="m-0 btn btn-primary btn-sm w-90">Next
            </button>
          </div>

        </div>
      </div>

      <CustomModal :stepOne="stepOne" :step="step" :closeModel="closeModel" :confirmModel="confirmModel"
                   v-if="showModal"/>

      </div>

    `,
    components:  {
        CustomModal,WireShelfStepOne,WireShelfStepTwo
    },
    data() {
        return {
            showModal       : false,
            step            : '',
            orderStep            : 1,
            currentStepValue: '',
            stepOne         : {
                'input-one'  : '0',
                'input-two'  : '0',
            },
            stepTwo: '',
            stepThree: '',
            stepFour: ''
        }
    },
    computed:{
        stepOneValue(){
            let check = true;
            Object.entries(this.stepOne).forEach(item => {
                if(item[1] !== '0'){
                    check = false
                }
            })
            return check
        }
    },

    methods:{
        handleNextPrev(data,order){
            this.orderStep = data;
            if(order === 'prev'){
                if(data > 1){
                    this.orderStep -= 1
                }
            }else{
                if(this.orderStep < 2){
                    this.orderStep += 1
                }
            }
        },
        handleStepOne(name) {
            document.querySelector('body').classList.add('modalShow')
            this.step             = name
            this.currentStepValue = this.stepOne[this.step];
            this.showModal        = true;

        },

        closeModel() {
            this.stepOne[this.step] = this.currentStepValue;
            this.showModal          = false;
            this.step               = ''
            this.currentStepValue   = ''
            document.querySelector('body').classList.remove('modalShow')
        },
        confirmModel(){
            this.stepOne[this.step] === '' ? this.stepOne[this.step] = 0 : this.stepOne[this.step]
            this.showModal          = false;
            this.step               = ''
            this.currentStepValue   = ''
            document.querySelector('body').classList.remove('modalShow')
        }
    }
};