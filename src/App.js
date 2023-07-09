import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AdminLogin from './components/forms/AdminLogin';
import AddDeliveryAgent from './components/forms/DeliveryAgent/AddDeliveryAgent';
import AddInventoryManager from './components/forms/InventoryManager/AddInventoryManager';
import AddProducts from './components/forms/Product/AddProducts';
import SideBar from './components/SideBar';
import AddCategory from './components/forms/Category/AddCategory';
import AddSubcategory from './components/forms/SubCategory/AddSubcategory';
import DeliveryPage from './pages/DeliveryPage';
import InventoryPage from './pages/InventoryPage';
import EditDeliveryAgent from './components/forms/DeliveryAgent/EditDeliveryAgent';
import EditInventoryManager from './components/forms/InventoryManager/EditInventoryManager';
import EditProduct from './components/forms/Product/EditProduct';
import EditCategory from './components/forms/Category/EditCategory';
import EditSubCategory from './components/forms/SubCategory/EditSubCategory';
import AddBrand from './components/forms/Brand/AddBrand';
import EditBrand from './components/forms/Brand/EditBrand';
import AddVendor from './components/forms/Vendor/AddVendor';
import EditVendor from './components/forms/Vendor/EditVendor';
import AddUom from './components/forms/Uom/AddUom';
import EditUom from './components/forms/Uom/EditUom';
import VendorPage from "./pages/VendorPage";
import AddFinanceManager from "./components/forms/FinanceManager/AddFinanceManager";
import EditFinanceManager from "./components/forms/FinanceManager/EditFinanceManager";
import AddCustomer from "./components/forms/Customer/AddCustomer";
import EditCustomer from "./components/forms/Customer/EditCustomer";
import CustomerPage from "./pages/CustomerPage";
import FinancePage from "./pages/FinancePage";




function App() {



  return (
    <div className='flex font-poppins'>

      <Router>
        <Routes>
          <Route exact path='/dashboard' element={<SideBar />} >

            <Route exact path='home' element={<Home />} />
            <Route exact path="addcategory" element={<AddCategory />} />
            <Route exact path="addsubcategory" element={<AddSubcategory />} />
            <Route exact path="addproduct" element={<AddProducts />} />
            <Route exact path="viewproducts" element={<ProductPage />} />

            <Route exact path="adddeliveryagent" element={<AddDeliveryAgent />} />
            <Route exact path="viewdeliveryagents" element={<DeliveryPage />} />

            <Route exact path="addinventorymanager" element={<AddInventoryManager />} />
            <Route exact path="viewinventorymanagers" element={<InventoryPage />} />

            <Route exact path="addfinancemanager" element={<AddFinanceManager />} />
            <Route exact path="editfinancemanager" element={<EditFinanceManager />} />

            <Route exact path="addcustomer" element={<AddCustomer />} />
            <Route exact path="editcustomer" element={<EditCustomer />} />

            <Route exact path="viewvendors" element={<VendorPage />} />


            <Route exact path="editdeliveryagent" element={<EditDeliveryAgent />} />
            <Route exact path="editinventorymanager" element={<EditInventoryManager />} />
            <Route exact path="editproduct" element={<EditProduct />} />
            <Route exact path="editcategory" element={<EditCategory />} />
            <Route exact path="editsubcategory" element={<EditSubCategory />} />
            <Route exact path="addbrand" element={<AddBrand />} />
            <Route exact path="addvendor" element={<AddVendor />} />
            <Route exact path="editbrand" element={<EditBrand />} />
            <Route exact path="editvendor" element={<EditVendor />} />
            <Route exact path="adduom" element={<AddUom />} />
            <Route exact path="edituom" element={<EditUom />} />

            <Route exact path="viewcustomers" element={<CustomerPage />} />
            <Route exact path="viewfinancemanagers" element={<FinancePage />} />
          </Route>


          <Route exact path="/" element={<AdminLogin />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
