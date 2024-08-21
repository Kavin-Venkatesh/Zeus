<template>
    <div class="addOffer_mainContainer">
        <div class="addOffer_InputMainContainer">
            <h2>
                <i class="pi pi-arrow-left"
                @click="handleBackButtonClick" 
                style="margin: 0rem 2rem 0rem 3rem;
                font-size: 1.3rem;
                cursor: pointer;
                 "></i>
                Add job offer or interneship Offer Proof
            </h2>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Name <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Name">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Register Number <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Roll Number">
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="gender">Gender <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="gender" v-model="selectedGender" class="selectOption">
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Date of Birth <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="date" id="dob" placeholder="Date of Birth">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Mobile Number<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Mobile Number">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="degree">Degree<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="degree" v-model="selectedDegree" class="selectOption">
                        <option value="be">BE(Bachelor of Engineering)</option>
                        <option value="btech">B.Tech (Bachelor of Technology)</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="branch">Branch <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="branch" v-model="selectedBranch" class="selectOption">
                        <option value="biomedical_engineering">B.E. - Biomedical Engineering</option>
                        <option value="biotechnology">B.Tech. - Biotechnology</option>
                        <option value="electronics_instrumentation_engineering">B.E. - Electronics And Instrumentation
                            Engineering</option>
                        <option value="electronics_communication_engineering">B.E. - Electronics And Communication
                            Engineering</option>
                        <option value="electrical_electronics_engineering">B.E. - Electrical And Electronics Engineering
                        </option>
                        <option value="computer_science_engineering">B.E. - Computer Science And Engineering</option>
                        <option value="computer_science_design">B.E. - Computer Science And Design</option>
                        <option value="civil_engineering">B.E. - Civil Engineering</option>
                        <option value="information_science_engineering">B.E. - Information Science And Engineering
                        </option>
                        <option value="mechanical_engineering">B.E. - Mechanical Engineering</option>
                        <option value="mechatronics_engineering">B.E. - Mechatronics Engineering</option>
                        <option value="agricultural_engineering">B.Tech. - Agricultural Engineering</option>
                        <option value="ai_data_science">B.Tech. - Artificial Intelligence And Data Science</option>
                        <option value="ai_machine_learning">B.Tech. - Artificial Intelligence And Machine Learning
                        </option>
                        <option value="computer_science_business_system">B.Tech. - Computer Science And Business System
                        </option>
                        <option value="computer_technology">B.Tech. - Computer Technology</option>
                        <option value="fashion_technology">B.Tech. - Fashion Technology</option>
                        <option value="food_technology">B.Tech. - Food Technology</option>
                        <option value="information_technology">B.Tech. - Information Technology</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Batch<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Batch">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Company Name<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Company Name">
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="companyCategory">Company Category<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="companyCategory" v-model="selectedCompanyCategory" class="selectOption">
                        <option value="product">Product Company</option>
                        <option value="core">Core Company</option>
                        <option value="service">Service Based Company</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="placementOrganizer">Placement Organized By<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="placementOrganizer" v-model="organizedBy" class="selectOption">
                        <option value="tap">TAP (Department of Training and Placement)</option>
                        <option value="own">Own</option>
                    </select>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="companyLocation">Company Location<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="Company Location">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="internshipDate">Internship Joining Date<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="stipend">Stipend<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="in Rupees ₹">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="salary">Company CTC<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" placeholder="in Rupees ₹">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="placedDate">Placed Date<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="date" id="dob" placeholder="Date of Birth">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="availableProofs">Available Proofs<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <div class="checkboxContainer">
                        <input type="checkbox" id="mailConfirmation" v-model="proofs.mailConfirmation">
                        <label for="mailConfirmation" class="proofLabel">Mail Confirmation</label>
                    </div>
                    <div class="checkboxContainer">
                        <input type="checkbox" id="internshipLetter" v-model="proofs.internshipLetter">
                        <label for="internshipLetter">Internship Letter</label>
                    </div>
                    <div class="checkboxContainer">
                        <input type="checkbox" id="letterOfIntent" v-model="proofs.letterOfIntent">
                        <label for="letterOfIntent">Letter of Intent</label>
                    </div>
                    <div class="checkboxContainer">
                        <input type="checkbox" id="offerLetter" v-model="proofs.offerLetter">
                        <label for="offerLetter">Offer Letter</label>
                    </div>
                </div>
            </div>

            <div v-if="proofs.mailConfirmation" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="mailConfirmationFile">Mail Confirmation Screenshot<span class="highligher"> *
                        </span></label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('mailConfirmationFileRef')"
                        class="uploadIcon" />
                    <input type="file" id="mailConfirmationFile" accept="image/*"
                        @change="handleFileChange($event, 'mailConfirmationFile')" class="fileInput"
                        ref="mailConfirmationFileRef">
                    <span v-if="fileNames.mailConfirmationFile" class="fileName">{{ fileNames.mailConfirmationFile
                        }}</span>
                    <span v-if="fileErrors.mailConfirmationFile" class="fileError">{{ fileErrors.mailConfirmationFile
                        }}</span>
                </div>
            </div>

            <div v-if="proofs.internshipLetter" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="internshipLetterFile">Internship Letter Proof <span class="highligher"> *
                        </span><br>(PDF, less than 2MB)</label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('internshipLetterFileRef')"
                        class="uploadIcon" />
                    <input type="file" id="internshipLetterFile" accept="application/pdf"
                        @change="handleFileChange($event, 'internshipLetterFile')" class="fileInput"
                        ref="internshipLetterFileRef">
                    <span v-if="fileNames.internshipLetterFile" class="fileName">{{ fileNames.internshipLetterFile
                        }}</span>
                    <span v-if="fileErrors.internshipLetterFile" class="fileError">{{ fileErrors.internshipLetterFile
                        }}</span>
                </div>
            </div>

            <div v-if="proofs.letterOfIntent" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="letterOfIntentFile">Letter of Intent Proof <span class="highligher"> * </span><br>(PDF,
                        less than 2MB)</label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('letterOfIntentFileRef')"
                        class="uploadIcon" />
                    <input type="file" id="letterOfIntentFile" accept="application/pdf"
                        @change="handleFileChange($event, 'letterOfIntentFile')" class="fileInput"
                        ref="letterOfIntentFileRef">
                    <span v-if="fileNames.letterOfIntentFile" class="fileName">{{ fileNames.letterOfIntentFile }}</span>
                    <span v-if="fileErrors.letterOfIntentFile" class="fileError">{{ fileErrors.letterOfIntentFile
                        }}</span>
                </div>
            </div>

            <div v-if="proofs.offerLetter" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="offerLetterFile">Offer Letter Proof <span class="highligher"> * </span><br>(PDF, less
                        than 2MB)</label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('offerLetterFileRef')"
                        class="uploadIcon" />
                    <input type="file" id="offerLetterFile" accept="application/pdf"
                        @change="handleFileChange($event, 'offerLetterFile')" class="fileInput"
                        ref="offerLetterFileRef">
                    <span v-if="fileNames.offerLetterFile" class="fileName">{{ fileNames.offerLetterFile }}</span>
                    <span v-if="fileErrors.offerLetterFile" class="fileError">{{ fileErrors.offerLetterFile }}</span>
                </div>
            </div>
            <div class="OfferButtonContainer">
                <button class="SubmissioncancelButton">
                    <i class="pi pi-times"
                        style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Cancel
                </button>
                <button class="SubmissionapproveButton"><i class="pi pi-check"
                        style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import '../addoffer/addOffer.css';
import 'primeicons/primeicons.css';
// import CloudUpload from '../../../assets/cloudUpload.png';
export default {
    name: "AddOffer",

    data() {
        return {
            selectedGender: '',
            cloudUploadUrl: require('../../../assets/cloudUpload.png'),
            proofs: {
                mailConfirmation: false,
                internshipLetter: false,
                letterOfIntent: false,
                offerLetter: false
            },
            fileNames: {
                mailConfirmationFile: '',
                internshipLetterFile: '',
                letterOfIntentFile: '',
                offerLetterFile: ''
            },
            fileErrors: {
                mailConfirmationFile: '',
                internshipLetterFile: '',
                letterOfIntentFile: '',
                offerLetterFile: ''
            }
        };
    },
    methods: {
        triggerFileInput(refName) {
            const fileInput = this.$refs[refName];
            if (fileInput) {
                fileInput.click();
            }
        },
        handleFileChange(event, refName) {
            const file = event.target.files[0];
            if (file) {
                if (file.size > 2 * 1024 * 1024) {
                    this.fileErrors[refName] = 'File size must be less than 2MB';
                    this.fileNames[refName] = '';
                    this.$refs[refName].value = ''; // Clear the file input
                } else {
                    this.fileNames[refName] = file.name;
                    this.fileErrors[refName] = '';
                }
            }
        },
        handleBackButtonClick() {
            this.$router.push('/student/home');
        }
    }
}
</script>

<style scoped>
input[type="file"] {
    width: 100%;
}


/* 
.fileInput {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}


.fileInput:hover {
  border-color: #888;
}

.fileInput:focus {
  border-color: #555;
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
} */
</style>
