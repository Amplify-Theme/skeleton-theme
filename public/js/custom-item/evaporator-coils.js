import CustomModal from './components/custom-modal.js';
import CoilStepOne from './components/evaporator-coils/step-1.js';
import CoilStepTwoSix from './components/evaporator-coils/step-2-6.js';
import CoilStepTwoSeven from './components/evaporator-coils/step-7.js';
export default {
    name    : 'EvaporateCoil',
    template: `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-evaporator-coils ">
      <div class="row">
        <div class="col-12">
          <p class="fw-600 text-dark mb-5">CREATE YOUR CUSTOM EVAPORATOR COIL</p>

          <!--STEP 01-->
          <CoilStepOne
              :orderStep="orderStep"
              :stepOneValue="stepOneValue"
              :handleStepOne="handleStepOne"
              :stepOne="stepOne"
          />

          <!--STEP 02-->
          <CoilStepTwoSix
            :orderStep="orderStep"
            :stepTwo="stepTwo"
            :stepOneValue="stepOneValue"
            :stepThree="stepThree"
            :stepFour="stepFour"
            :stepFive="stepFive"
            :stepSix="stepSix"
          />
          
          <!--STEP 07-->
          <CoilStepTwoSeven 
            :orderStep="orderStep"
            :stepSeven="stepSeven"
            :stepSix="stepSix"
          />
          
          <!-- NEXT-PREV BUTTON -->
          <div class="d-sm-none d-flex align-items-center justify-content-between">
            <button :disabled="orderStep===1" @click="handleNextPrev(orderStep,'prev')"
                    :class="orderStep > 1 ? 'btn-primary' : 'btn-secondary' " class="w-90 m-0 btn btn-sm">Prev
            </button>
            <div class="d-flex gap-3">
              <span :class="orderStep === 1 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 2 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
              <span :class="orderStep === 3 ? 'bg-danger' : 'bg-secondary' " class="bullet"></span>
            </div>
            <button v-if="orderStep === 3" type="submit" class="m-0 btn btn-primary btn-sm w-90" :disabled="!stepSix">
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
    components: {
        CustomModal,
        CoilStepOne,
        CoilStepTwoSix,
        CoilStepTwoSeven
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
                'input-three': '0',
                'input-four' : '0',
                'input-five' : '0',
                'input-six'  : '0',
                'input-seven': '0',
            },
            stepTwo: '',
            stepThree: '',
            stepFour: '',
            stepFive: '',
            stepSix: '',
            stepSeven: '',
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
                if(this.orderStep < 3){
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