import React, { useState, useContext, useEffect } from "react";
import {
  withFormik,
  Form,
  Field,
  ErrorMessage,
  yupToFormErrors,
  Formik,
  useFormikContext
} from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues = {
  optimal_price: 500,
  name: "place",
  bedrooms: 1,
  bathrooms: 1,
  bed_type: "Twin",
  room_type: "big",
  maximum_nights: 2,
  minimum_nights: 1,
  extra_people: 5,
  accommodates: 1,
  Neighbourhood_group_cleansed: "Lichtenberg",
  property_type: "apartment",
  cancellation_policy: "severe",
  guests_included: 5
};

function FormikListingForm({
  hostId,
  setValuesToListings,
  editCard,
  setEditCard
}) {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={editCard || initialValues}
      validationSchema={Yup.object().shape({
        bedrooms: Yup.string().required("How many bedrooms?"),
        bathrooms: Yup.string().required("How many bathrooms?")
      })}
      onSubmit={(values, formikBag) => {
        let url = values.id
          ? `host/${hostId}/properties/${values.id}`
          : `host/${hostId}/properties/`;
        let method = values.id ? "put" : "post";
        axiosWithAuth()
          [method](url, values)
          .then(response => {
            console.log("onsubmit", response);
            setValuesToListings(response.data.hostProperty, values.id);
            console.log("values id", values.id);
            formikBag.resetForm();
          })
          .catch(error => console.log(error.response));
        console.log(values);
      }}
    >
      {() => {
        return (
          <Form>
            <div>
              Name: <Field type="text" name="name" />
            </div>
            <div>
              Bedrooms: <Field type="number" name="bedrooms" />
            </div>
            <div>
              Bathrooms: <Field type="number" name="bathrooms" />
            </div>
            <div>
              Bed Type:
              <Field as="select" name="bed_type">
                <option value="Twin">Twin</option>
                <option value="King">King</option>
                <option value="Queen">Queen</option>
              </Field>
            </div>
            <div>
              Neighborhood:
              <Field as="select" name="Neighbourhood_group_cleansed">
                <option value="Friedrichshain - Kreuzberg">
                  Friedrichshain - Kreuzberg
                </option>
                <option value="Mitte">Mitte</option>
                <option value="Pankow">Pankow</option>
                <option value="Neukölln">Neukölln</option>
                <option value="Charlottenburg - Wilm">
                  Charlottenburg - Wilm
                </option>
                <option value="Tempelhof - Schöneberg">
                  Tempelhof - Schöneberg
                </option>
                <option value="Lichtenberg">Lichtenberg</option>
                <option value="Treptow - Köpenick">Treptow - Köpenick</option>
                <option value="Steglitz - Zehlendorf">
                  Steglitz - Zehlendorf
                </option>
                <option value="Reinickendorf">Reinickendorf</option>
                <option value="Marzahn - Hellersdorf">
                  Marzahn - Hellersdorf
                </option>
                <option value="Spandau">Spandau</option>
              </Field>
            </div>
            <div>
              Room Type:
              <Field type="text" name="room_type" />
            </div>
            <div>
              Maximum Nights:
              <Field type="number" name="maximum_nights" />
            </div>
            <div>
              Minimum Nights:
              <Field type="number" name="minimum_nights" />
            </div>
            <div>
              Extra People:
              <Field type="number" name="extra_people" />
            </div>
            <div>
              Accomodates:
              <Field type="number" name="accommodates" />
            </div>
            <div>
              Property Type:
              <Field type="text" name="property_type" />
            </div>
            <div>
              Cancellation Policy:
              <Field type="text" name="cancellation_policy" />
            </div>
            <div>
              Guests Included:
              <Field type="number" name="guests_included" />
            </div>
            <div>
              Optimal Price:
              <Field type="number" name="optimal_price" />
            </div>
            {editCard ? (
              <button type="submit">Edit Property</button>
            ) : (
              <button type="submit">Add Property</button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikListingForm;
