import { StyleSheet} from 'react-native';

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          paddingTop: 250, // Adjust this value to move everything upwards
        },
        background: {
          flex: 1,
          width: '100%',
          resizeMode: 'cover',
        },
        appName: {
          fontSize: 32,
          fontWeight: 'bold',
          color: 'white',
        },
        heading: {
          fontSize: 24,
          color: 'white',
          marginTop: 10,
        },
        subHeading: {
          fontSize: 16,
          color: 'white',
          marginBottom: 20,
        },
        searchContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5, // Reduce this value to bring the search bar closer to the subheading
        },
        input: {
          backgroundColor: 'white',
          width: 300,
          padding: 10,
          borderRadius: 5,
          marginRight: 10,
          fontSize: 11, //font size of the search bar in the home screen 
        },
        icon: {
          marginLeft: 10,
        },  
     modalContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
     },
     modalContent: {
       backgroundColor: 'white',
       padding: 20,
       borderRadius: 10,
       width: 250,
     },
     option: {
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 10,
     },
     optionText: {
       marginLeft: 10,
       fontSize: 16,
     },
     closeButton: {
       marginTop: 20,
       alignItems: 'center',
     },
     closeButtonText: {
       color: 'blue',
       fontSize: 16,
     },
     searchResultsContainer: {
       padding: 20,
     },
     spacer: {
       height: 10,
     },
     modalSearchContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
     },
     searchBox: {
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: 'white',
       borderRadius: 5,
       width: '80%',
     },
     modalSearchInput: {
       flex: 1,
       padding: 10,
     },
     filterButton: {
       backgroundColor: '#f1f1f1',
       padding: 10,
       borderRadius: 50,
       alignItems: 'center',
     },
     sortText: {
       marginTop: 20,
       fontSize: 16,
       color: 'black',
     },
     propertyList: {
       marginTop: 20,
     },
     propertyCard: {
       backgroundColor: 'white',
       marginBottom: 20,
       borderRadius: 10,
       overflow: 'hidden',
     },
     propertyImage: {
       height: 200,
       width: '100%',
       justifyContent: 'flex-end',
     },
     favoriteIconContainer: {
       position: 'absolute',
       top: 10,
       right: 10,
     },
     propertyInfo: {
       padding: 10,
     },
     propertyPrice: {
       fontSize: 18,
       fontWeight: 'bold',
     },
     propertyDetails: {
       fontSize: 14,
       color: 'gray',
     },
     propertyAddress: {
       fontSize: 14,
     },
     closeButtonText: {
       fontSize: 16,
       color: 'blue',
     },
     filtersContainer: {
       padding: 20,
     },
     filtersHeader: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
     },
     filtersTitle: {
       fontSize: 24,
       fontWeight: 'bold',
     },
     resetText: {
       fontSize: 16,
       color: 'blue',
     },
     filterSection: {
       marginTop: 20,
     },
     filterLabel: {
       fontSize: 18,
       fontWeight: 'bold',
     },
     dropdown: {
       marginTop: 10,
     },
     dropdownButton: {
       backgroundColor: '#f0f0f0',
       padding: 10,
       borderRadius: 5,
     },
     dropdownText: {
       fontSize: 16,
     },
     modalOverlay: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
     },
     dropdownOptionsContainer: {
       backgroundColor: 'white',
       padding: 20,
       borderRadius: 10,
       width: '80%',
     },
     checkboxContainer: {
       marginTop: 10,
     },
     checkboxOption: {
       flexDirection: 'row',
       alignItems: 'center',
       marginBottom: 15,
     },
     checkboxText: {
       marginLeft: 10,
     },
     applyButton: {
       backgroundColor: '#1E90FF',
       padding: 15,
       borderRadius: 5,
       marginTop: 20,
     },
     applyButtonText: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white',
       textAlign: 'center',
     },
     filtersTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 50, 
      },
      modalSearchInput: {
        flex: 1,
        padding: 50,
        fontSize: 20, 
    },
});

export default styles;