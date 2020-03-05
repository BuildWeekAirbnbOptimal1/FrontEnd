import React, { useState } from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

function FormikListingForm({ values, errors, touched, isSubmitting }) {
    return (
   <Form>
       <h2>Add A New Property</h2>
       <div>Bedrooms: <Field type="number" name="bedrooms"/></div>       
       <div>Bathrooms: <Field type="number" name="bathrooms"/></div>
       <div>Rooms: <Field type="number" name="rooms"/></div>
       <div>Neighborhood:<Field as="select" name="neighbourhood_group_cleansed" >
                    <option value="friedrichshain">Friedrichshain-Kreuzberg</option>
                    <option value="mitte">Mitte</option>
                    <option value="pankow">Pankow</option>
                    <option value="neukolln">Neukölln</option>
                    <option value="charlottenburg">Charlottenburg-Wilm</option>
                    <option value="tempelhof">Tempelhof - Schöneberg</option>
                    <option value="lichtenberg">Lichtenberg</option>
                    <option value="treptow">Treptow - Köpenick</option>
                    <option value="steglitz">Steglitz - Zehlendorf</option>
                    <option value="reinickendorf">Reinickendorf</option>
                    <option value="marzahn">Marzahn - Hellersdorf</option>
                    <option value="spandau">Spandau</option>
                </Field>
                </div>
       <div>Home Type:<Field component="select" name="houseType" value={['A', 'B']} /></div>
       <button type="submit">Add Property</button>
   </Form>
    );
}
    const ListingForm = withFormik({
        mapPropsToValues({ bedrooms, bathrooms, rooms, neighbourhood_group_cleansed, houseType }) {
            return {
                bedrooms: bedrooms || 1,
                bathrooms: bathrooms || 1,
                rooms: rooms || 2,
                neighbourhood_group_cleansed: neighbourhood_group_cleansed,
                houseType: houseType,
            };
        },
        validationSchema: Yup.object().shape({
            bedrooms: Yup.string().required("How many bedrooms?"),
            bathrooms: Yup.string().required("How many bathrooms?"),

        }),
        handleSubmit(values){
            console.log(values);
        }
    })(FormikListingForm);


export default ListingForm;