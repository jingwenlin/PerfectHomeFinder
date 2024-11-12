import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IconImage from '../../assets/images/minh-pham-OtXADkUh3-I-unsplash.jpg';
import styles from './styles';

// More options here if want to change the background pic 
// import IconImage from '../../assets/images/pixasquare-4ojhpgKpS68-unsplash.jpg';
// import IconImage from '../../assets/images/stephan-bechert-yFV39g6AZ5o-unsplash.jpg';
// import IconImage from '../../assets/images/timothy-buck-psrloDbaZc8-unsplash.jpg';
// import IconImage from '../../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
// import IconImage from '../../assets/images/dane-deaner-qRfMB-IOQjE-unsplash.jpg';
// import IconImage from '../../assets/images/avery-klein-JaXs8Tk5Iww-unsplash.jpg';


const App = () => {
 const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false);
 const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
 const [isFiltersModalVisible, setIsFiltersModalVisible] = useState(false);


 // State for checkboxes
 const [petFriendly, setPetFriendly] = useState(false);
 const [hasPool, setHasPool] = useState(false);
 const [hasGym, setHasGym] = useState(false);


 // State for dropdown selections
 const [selectedPriceRange, setSelectedPriceRange] = useState("Select Price Range");
 const [priceRangeModalVisible, setPriceRangeModalVisible] = useState(false);
 const [selectedBedrooms, setSelectedBedrooms] = useState("Select Bedrooms");
 const [bedroomsModalVisible, setBedroomsModalVisible] = useState(false);
 const [selectedBathrooms, setSelectedBathrooms] = useState("Select Bathrooms");
 const [bathroomsModalVisible, setBathroomsModalVisible] = useState(false);


 // Options for dropdowns
 const priceRangeOptions = ["$800 - $1500", "$1500 - $2500", "$2500 - $3500","3500+"];
 const bedroomOptions = ["Studio","1", "2", "3", "3+"];
 const bathroomOptions = ["1", "2", "3","3+"];


 const openPhotoModal = () => setIsPhotoModalVisible(true);
 const closePhotoModal = () => setIsPhotoModalVisible(false);


 const openSearchModal = () => {
   setIsSearchModalVisible(true);
   setIsFiltersModalVisible(false);
 };
 const closeSearchModal = () => setIsSearchModalVisible(false);


 const openFiltersModal = () => {
   setIsFiltersModalVisible(true);
   setIsSearchModalVisible(false);
 };
 const closeFiltersModal = () => setIsFiltersModalVisible(false);


 return (
   <ImageBackground source={IconImage} style={styles.background}>
     <View style={styles.container}>
       <Text style={styles.appName}>VisiNest</Text>
       <Text style={styles.heading}>Search For Your Perfect Rental</Text>
       <Text style={styles.subHeading}>Helping renters find their dream home</Text>
       <View style={styles.searchContainer}>
         <TextInput
           style={styles.input}
           placeholder="Enter city or home feature (e.g., Austin, 3-bedroom)"
           placeholderTextColor="#aaa"
         />
         <TouchableOpacity onPress={openPhotoModal}>
           <FontAwesome name="image" size={24} color="blue" style={styles.icon} />
         </TouchableOpacity>
         <TouchableOpacity onPress={openSearchModal}>
           <FontAwesome name="search" size={24} color="blue" style={styles.icon} />
         </TouchableOpacity>
       </View>


       {/* Modal for Photo Options */}
       <Modal
         visible={isPhotoModalVisible}
         transparent={true}
         animationType="slide"
         onRequestClose={closePhotoModal}
       >
         <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
             <TouchableOpacity style={styles.option} onPress={closePhotoModal}>
               <FontAwesome name="photo" size={24} color="black" />
               <Text style={styles.optionText}>Photo Library</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.option} onPress={closePhotoModal}>
               <FontAwesome name="camera" size={24} color="black" />
               <Text style={styles.optionText}>Take Photo or Video</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.option} onPress={closePhotoModal}>
               <FontAwesome name="folder" size={24} color="black" />
               <Text style={styles.optionText}>Choose Files</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={closePhotoModal} style={styles.closeButton}>
               <Text style={styles.closeButtonText}>Cancel</Text>
             </TouchableOpacity>
           </View>
         </View>
       </Modal>


       {/* Modal for Search Results with Filters Icon */}
       <Modal
         visible={isSearchModalVisible}
         animationType="slide"
         onRequestClose={closeSearchModal}
       >
         <View style={styles.searchResultsContainer}>
           <View style={styles.spacer} />


           {/* Search Bar with Filters Icon in Search Results Modal */}
           <View style={styles.modalSearchContainer}>
             <View style={styles.searchBox}>
               <TextInput
                 style={styles.modalSearchInput}
                 placeholder="Search"
                 placeholderTextColor="#aaa"
               />
               <TouchableOpacity onPress={closeSearchModal}>
                 <FontAwesome name="search" size={20} color="black" style={styles.icon} />
               </TouchableOpacity>
             </View>
             <TouchableOpacity style={styles.filterButton} onPress={openFiltersModal}>
               <FontAwesome name="plus" size={20} color="black" />
             </TouchableOpacity>
           </View>


           <Text style={styles.sortText}>Sort: Homes found</Text>
           <ScrollView contentContainerStyle={styles.propertyList}>
             <View style={styles.propertyCard}>
               <ImageBackground source={{ uri: 'https://via.placeholder.com/300' }} style={styles.propertyImage}>
                 <TouchableOpacity style={styles.favoriteIconContainer}>
                   <FontAwesome name="heart-o" size={24} color="white" />
                 </TouchableOpacity>
               </ImageBackground>
               <View style={styles.propertyInfo}>
                 <Text style={styles.propertyPrice}>$2700/month</Text>
                 <Text style={styles.propertyDetails}>4 bds | 3.5 ba | 1,786 sqft | Built In 2018</Text>
                 <Text style={styles.propertyAddress}>243 Oak Lane Dr, Austin TX</Text>
               </View>
             </View>
           </ScrollView>
           <TouchableOpacity onPress={closeSearchModal} style={styles.closeButton}>
             <Text style={styles.closeButtonText}>Close</Text>
           </TouchableOpacity>
         </View>
       </Modal>


       {/* Modal for Filters */}
       <Modal
         visible={isFiltersModalVisible}
         animationType="slide"
         onRequestClose={closeFiltersModal}
       >
         <ScrollView contentContainerStyle={styles.filtersContainer}>
           <View style={styles.filtersHeader}>
             <TouchableOpacity onPress={closeFiltersModal}>
               <FontAwesome name="arrow-left" size={24} color="black" />
             </TouchableOpacity>
             <Text style={styles.filtersTitle}>Filters</Text>
             <TouchableOpacity>
               <Text style={styles.resetText}>Reset</Text>
             </TouchableOpacity>
           </View>


           {/* Price Range Dropdown */}
           <View style={styles.filterSection}>
             <Text style={styles.filterLabel}>Price Range</Text>
             <TouchableOpacity
               style={[styles.dropdown, styles.dropdownButton]}
               onPress={() => setPriceRangeModalVisible(true)}
             >
               <Text style={styles.dropdownText}>{selectedPriceRange}</Text>
             </TouchableOpacity>
             <Modal visible={priceRangeModalVisible} transparent={true} animationType="fade">
               <View style={styles.modalOverlay}>
                 <View style={styles.dropdownOptionsContainer}>
                   {priceRangeOptions.map((option, index) => (
                     <TouchableOpacity
                       key={index}
                       style={[
                         styles.option,
                         selectedPriceRange === option && styles.selectedOption,
                       ]}
                       onPress={() => {
                         setSelectedPriceRange(option);
                         setPriceRangeModalVisible(false);
                       }}
                     >
                       <Text style={styles.optionText}>{option}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
               </View>
             </Modal>
           </View>


           {/* Bedrooms Dropdown */}
           <View style={styles.filterSection}>
             <Text style={styles.filterLabel}>Bedrooms</Text>
             <TouchableOpacity
               style={[styles.dropdown, styles.dropdownButton]}
               onPress={() => setBedroomsModalVisible(true)}
             >
               <Text style={styles.dropdownText}>{selectedBedrooms}</Text>
             </TouchableOpacity>
             <Modal visible={bedroomsModalVisible} transparent={true} animationType="fade">
               <View style={styles.modalOverlay}>
                 <View style={styles.dropdownOptionsContainer}>
                   {bedroomOptions.map((option, index) => (
                     <TouchableOpacity
                       key={index}
                       style={[
                         styles.option,
                         selectedBedrooms === option && styles.selectedOption,
                       ]}
                       onPress={() => {
                         setSelectedBedrooms(option);
                         setBedroomsModalVisible(false);
                       }}
                     >
                       <Text style={styles.optionText}>{option}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
               </View>
             </Modal>
           </View>


           {/* Bathrooms Dropdown */}
           <View style={styles.filterSection}>
             <Text style={styles.filterLabel}>Bathrooms</Text>
             <TouchableOpacity
               style={[styles.dropdown, styles.dropdownButton]}
               onPress={() => setBathroomsModalVisible(true)}
             >
               <Text style={styles.dropdownText}>{selectedBathrooms}</Text>
             </TouchableOpacity>
             <Modal visible={bathroomsModalVisible} transparent={true} animationType="fade">
               <View style={styles.modalOverlay}>
                 <View style={styles.dropdownOptionsContainer}>
                   {bathroomOptions.map((option, index) => (
                     <TouchableOpacity
                       key={index}
                       style={[
                         styles.option,
                         selectedBathrooms === option && styles.selectedOption,
                       ]}
                       onPress={() => {
                         setSelectedBathrooms(option);
                         setBathroomsModalVisible(false);
                       }}
                     >
                       <Text style={styles.optionText}>{option}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
               </View>
             </Modal>
           </View>


           {/* Amenities */}
           <View style={styles.filterSection}>
             <Text style={styles.filterLabel}>Amenities</Text>
             <View style={styles.checkboxContainer}>
               <TouchableOpacity
                 style={styles.checkboxOption}
                 onPress={() => setPetFriendly(!petFriendly)}
               >
                 <FontAwesome
                   name={petFriendly ? "check-square-o" : "square-o"}
                   size={24}
                   color={petFriendly ? "green" : "gray"}
                 />
                 <Text style={styles.checkboxText}>Pet-friendly</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.checkboxOption}
                 onPress={() => setHasPool(!hasPool)}
               >
                 <FontAwesome
                   name={hasPool ? "check-square-o" : "square-o"}
                   size={24}
                   color={hasPool ? "green" : "gray"}
                 />
                 <Text style={styles.checkboxText}>Pool</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.checkboxOption}
                 onPress={() => setHasGym(!hasGym)}
               >
                 <FontAwesome
                   name={hasGym ? "check-square-o" : "square-o"}
                   size={24}
                   color={hasGym ? "green" : "gray"}
                 />
                 <Text style={styles.checkboxText}>Gym</Text>
               </TouchableOpacity>
             </View>
           </View>


           {/* Apply Filters */}
           <TouchableOpacity style={styles.applyButton} onPress={closeFiltersModal}>
             <Text style={styles.applyButtonText}>Apply Filters</Text>
           </TouchableOpacity>
         </ScrollView>
       </Modal>
     </View>
   </ImageBackground>
 );
};


export default App;



