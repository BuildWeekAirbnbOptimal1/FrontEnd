import React, { useState, useContext } from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { LegitContext } from "../contexts/LegitContext";


function FormikListingForm({ values, errors, touched, isSubmitting }) {
        return (
   <Form>
       <h2>Add A New Property</h2>
       <div>Name: <Field type="text" name="name"/></div> 
       <div>Bedrooms: <Field type="number" name="bedrooms"/></div>       
       <div>Bathrooms: <Field type="number" name="bathrooms"/></div>
       <div>Bed Type: <Field as="select" name="bed_type"><option value="twin">Twin</option></Field></div>
       <div>Neighborhood:<Field as="select" name="Neighbourhood_group_cleansed" >
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
        <div>Room Type:<Field type="text" name="room_type" /></div>
        <div>Maximum Nights:<Field type="text" name="maximum_nights" /></div>
        <div>Minimum Nights:<Field type="text" name="minimum_nights" /></div>
        <div>Extra People:<Field type="text" name="extra_people" /></div>
        <div>Accomodates:<Field type="text" name="accommodates" /></div>
        <div>Property Type:<Field type="text" name="property_type" /></div>
        <div>Cancellation Policy:<Field type="text" name="cancellation_policy" /></div>
        <div>Guests Included:<Field type="text" name="guests_included" /></div>
        <div>Optimal Price:<Field type="text" name="optimal_price" /></div>
       <button type="submit">Add Property</button>
   </Form>
    );
}
    const ListingForm = withFormik({
        mapPropsToValues({ optimal_price, name, bedrooms, bathrooms, bed_type, Neighbourhood_group_cleansed, id, room_type, maximum_nights, minimum_nights, extra_people, accommodates, property_type, cancellation_policy, guests_included }) {
            
            return {
                optimal_price: optimal_price || 650,
                name: name || "NAME",
                bedrooms: bedrooms || 1,
                bathrooms: bathrooms || 1,
                bed_type: bed_type || "twin",
                room_type: room_type  || "Single",
                maximum_nights: maximum_nights || 1,
                minimum_nights: minimum_nights || 1,
                extra_people: extra_people || 1,
                accommodates: accommodates || 1,
                Neighbourhood_group_cleansed: Neighbourhood_group_cleansed,
                property_type: property_type || 1,
                cancellation_policy: cancellation_policy  || "Mild",
                guests_included: guests_included || 1,
                id: id
            };
        },
        validationSchema: Yup.object().shape({
            bedrooms: Yup.string().required("How many bedrooms?"),
            bathrooms: Yup.string().required("How many bathrooms?"),

        }),
        handleSubmit(values){
            axiosWithAuth().post(`host/${values.id}/properties/`, values)
            .then(response => console.log(response))
            .catch(error => console.log(error.response))
            console.log(values);
        }
    })(FormikListingForm);


export default ListingForm;