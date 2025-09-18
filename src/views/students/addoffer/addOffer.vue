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
                    <input type="text" id="title" v-model="form.name" placeholder="Name" disabled>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Register Number <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.registerNumber" placeholder="Roll Number" disabled>
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="gender">Gender <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="gender" v-model="form.selectedGender" class="selectOption">
                        <option value="" disabled>Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="placedDate">Date of Birth<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="date" v-model="form.dob" placeholder="Date of Birth" >
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Mobile Number<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.mobileNumber" placeholder="Mobile Number">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="degree">Degree<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="degree" v-model="form.selectedDegree" class="selectOption">
                        <option value="BE">BE(Bachelor of Engineering)</option>
                        <option value="B.Tech">B.Tech (Bachelor of Technology)</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="branch">Branch <span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="branch" v-model="form.selectedBranch" class="selectOption">
                        <option value="B.E. - Biomedical Engineering">B.E. - Biomedical Engineering</option>
                        <option value="B.E. - Electronics and Instrumentation Engineering">B.E. - Electronics And Instrumentation
                            Engineering</option>
                        <option value="B.E. - Electronics and Communication Engineering">B.E. - Electronics And Communication
                            Engineering</option>
                        <option value="B.E. - Electrical and Electronics Engineering">B.E. - Electrical And Electronics Engineering
                        </option>
                        <option value="B.E. - Computer Science Engineering">B.E. - Computer Science And Engineering</option>
                        <option value="B.E. - Computer Science and Design">B.E. - Computer Science And Design</option>
                        <option value="B.E. - Civil Engineering">B.E. - Civil Engineering</option>
                        <option value="B.E. - Information Science Engineering">B.E. - Information Science And Engineering
                        </option>
                        <option value="B.E. - Mechanical Engineering">B.E. - Mechanical Engineering</option>
                        <option value="B.E. - Mechatronics Engineering">B.E. - Mechatronics Engineering</option>
                        <option value="B.Tech. - Agricultural Engineering">B.Tech. - Agricultural Engineering</option>
                        <option value="B.Tech. - Aritificial Intelligence and Data Science">B.Tech. - Artificial Intelligence And Data Science</option>
                        <option value="B.Tech. - Artificial Intelligence and  Machine Learning">B.Tech. - Artificial Intelligence And Machine Learning
                        </option>
                        <option value="B.Tech. - Computer Science Business System">B.Tech. - Computer Science And Business System
                        </option>
                        <option value="B.Tech. - Computer Technology">B.Tech. - Computer Technology</option>
                        <option value="B.Tech. - Fashion Technology">B.Tech. - Fashion Technology</option>
                        <option value="B.Tech. - Food Technology">B.Tech. - Food Technology</option>
                        <option value="B.Tech. - Information Technology">B.Tech. - Information Technology</option>
                        <option value="B.Tech. - Biotechnology">B.Tech. - Biotechnology</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Batch<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.batchName" placeholder="Batch" disabled>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="title">Company Name<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.companyName" placeholder="Company Name">
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="companyCategory">Company Category<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="companyCategory" v-model="form.selectedCompanyCategory" class="selectOption">
                        <option value="Product Company ">Product Company</option>
                        <option value="Core Company ">Core Company</option>
                        <option value="Service Based Company">Service Based Company</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>


            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="placementOrganizer">Placement Organized By<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <select id="placementOrganizer" v-model="form.organizedBy" class="selectOption">
                        <option value="Training and Placement">TAP (Department of Training and Placement)</option>
                        <option value="Own">Own</option>
                    </select>
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="companyLocation">Company Location<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.companyLocation" placeholder="Company Location">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="internshipDate">Internship Joining Date<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="date"  v-model="form.internshipDate" placeholder="Internship Joining Date">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="stipend">Stipend<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.stipend" placeholder="in Rupees ₹">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="salary">Company CTC<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="text" id="title" v-model="form.salary" placeholder="in Rupees ₹">
                </div>
            </div>

            <div class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="placedDate">Placed Date<span class="highligher"> * </span></label>
                </div>
                <div class="inputRightContainer">
                    <input type="date"  v-model="form.placedDate" placeholder="Placed Date">
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
                    <label for="mailConfirmationFile">Mail Confirmation Screenshot<span class="highligher"> *</span></label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('mailConfirmationFileRef')"
                         class="uploadIcon" />
                    <input type="file" id="mailConfirmationFile" accept="image/*"
                           @change="handleFileChange($event, 'mailConfirmationFile')" class="fileInput"
                           ref="mailConfirmationFileRef">
                    <span v-if="fileNames.mailConfirmationFile" class="fileName">{{ fileNames.mailConfirmationFile }}</span>
                    <span v-if="fileErrors.mailConfirmationFile" class="fileError">{{ fileErrors.mailConfirmationFile }}</span>
                </div>
            </div>

            <div v-if="proofs.internshipLetter" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="internshipLetterFile">Internship Letter Proof <span class="highligher"> *</span><br>(PDF, less than 2MB)</label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('internshipLetterFileRef')"
                         class="uploadIcon" />
                    <input type="file" id="internshipLetterFile" accept="application/pdf"
                           @change="handleFileChange($event, 'internshipLetterFile')" class="fileInput"
                           ref="internshipLetterFileRef">
                    <span v-if="fileNames.internshipLetterFile" class="fileName">{{ fileNames.internshipLetterFile }}</span>
                    <span v-if="fileErrors.internshipLetterFile" class="fileError">{{ fileErrors.internshipLetterFile }}</span>
                </div>
            </div>

            <div v-if="proofs.letterOfIntent" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="letterOfIntentFile">Letter of Intent Proof <span class="highligher"> *</span><br>(PDF, less than 2MB)</label>
                </div>
                <div class="inputFileRightContainer">
                    <img :src="cloudUploadUrl" alt="Cloud Upload" @click="triggerFileInput('letterOfIntentFileRef')"
                         class="uploadIcon" />
                    <input type="file" id="letterOfIntentFile" accept="application/pdf"
                           @change="handleFileChange($event, 'letterOfIntentFile')" class="fileInput"
                           ref="letterOfIntentFileRef">
                    <span v-if="fileNames.letterOfIntentFile" class="fileName">{{ fileNames.letterOfIntentFile }}</span>
                    <span v-if="fileErrors.letterOfIntentFile" class="fileError">{{ fileErrors.letterOfIntentFile }}</span>
                </div>
            </div>

            <div v-if="proofs.offerLetter" class="addOffer_InputContainer">
                <div class="inputLeftContainer">
                    <label for="offerLetterFile">Offer Letter Proof <span class="highligher"> *</span><br>(PDF, less than 2MB)</label>
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
                <button class="SubmissioncancelButton" @click = "handleBackButtonClick">
                    <i class="pi pi-times"
                        style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Cancel
                </button>
                <button class="SubmissionapproveButton" @click="handleSubmit"><i class="pi pi-check"
                    style="margin: 0rem 0.6rem 0.2rem 0rem;font-size: 1.3rem; cursor: pointer;"></i>Submit
                </button>
            </div>
        </div>
        <Toast />
    </div>
</template>

<script>
import '../addoffer/addOffer.css';
import 'primeicons/primeicons.css';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: 'AddOffer',
  components: {
    Toast
  },
        data() {
        return {
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
            },
            form: {
                name: '',
                registerNumber: '',
                dob: '',
                mobileNumber: '',
                batchName: '',
                batch : '',
                selectedGender: '',
                selectedDegree: '',
                selectedBranch: '',
                selectedCompanyCategory: '',
                organizedBy: '',
                companyName: '',
                companyLocation: '',
                internshipDate: '',
                stipend: '',
                salary: '',
                placedDate: ''
            }
        };
    },
       methods: {
        async fetchUserData() {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`https://napoleon-p829.onrender.com/auth/user/${userId}`);
                const userData = response.data;
                this.form.name = userData.name;
                this.form.registerNumber = userData.registerNumber;
                this.form.batchName = userData.batchName;
                this.form.batch = userData.batch;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
            },
        triggerFileInput(refName) {
            this.$nextTick(() => {
                const fileInput = this.$refs[refName];
                if (fileInput) {
                    fileInput.click();
                }
            });
        },
        handleFileChange(event, refName) {
            const file = event.target.files[0];
            if (file) {
                if (file.size > 2 * 1024 * 1024) {
                    this.fileErrors[refName] = 'File size must be less than 2MB';
                    this.fileNames[refName] = '';
                    this.$refs[refName].value = '';
                } else {
                    this.fileNames[refName] = file.name;
                    this.fileErrors[refName] = '';
                }
            }
        },
        handleBackButtonClick() {
            this.$router.push('/student/home');
        },
        async handleSubmit() {
            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('registerNumber', this.form.registerNumber);
            formData.append('gender', this.form.selectedGender);
            formData.append('dob', this.form.dob);
            formData.append('mobileNumber', this.form.mobileNumber);
            formData.append('degree', this.form.selectedDegree);
            formData.append('branch', this.form.selectedBranch);
            formData.append('batchName', this.form.batchName);
            formData.append('batch', this.form.batch);
            formData.append('companyName', this.form.companyName);
            formData.append('companyCategory', this.form.selectedCompanyCategory);
            formData.append('organizedBy', this.form.organizedBy);
            formData.append('companyLocation', this.form.companyLocation);
            formData.append('internshipDate', this.form.internshipDate);
            formData.append('stipend', this.form.stipend);
            formData.append('salary', this.form.salary);
            formData.append('placedDate', this.form.placedDate);

            const userId = localStorage.getItem('userId');
            formData.append('userId', userId);
    
            if (this.proofs.mailConfirmation) {
                formData.append('mailConfirmationFile', this.$refs.mailConfirmationFileRef.files[0]);
            }
            if (this.proofs.internshipLetter) {
                formData.append('internshipLetterFile', this.$refs.internshipLetterFileRef.files[0]);
            }
            if (this.proofs.letterOfIntent) {
                formData.append('letterOfIntentFile', this.$refs.letterOfIntentFileRef.files[0]);
            }
            if (this.proofs.offerLetter) {
                formData.append('offerLetterFile', this.$refs.offerLetterFileRef.files[0]);
            }
    
            try {
                await axios.post('https://napoleon-p829.onrender.com/offer/addOffer', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.$toast.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Offer added successfully',
                    life: 3000
                });
                this.handleBackButtonClick();
            } catch (error) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to add offer',
                    life: 3000
                });
                console.error(error);
            }
        }
    },
    mounted() {
        this.fetchUserData();
    }
}
</script>

<style scoped>
input[type="file"] {
    width: 100%;
}
</style>
