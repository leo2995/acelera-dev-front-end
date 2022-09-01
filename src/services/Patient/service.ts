import api from "../api";
import { PatientDto } from "./dtos/Patient.dto";
import { IProfessionalId, IProfessionalIdAndPatient } from "../Profissional/dtos/IProfessional";

export async function fetchPatientList(id:IProfessionalId): Promise<PatientDto[]> {
    const url = `${id}/patients`;
    const { data } = await api.get(url);
    return data;
  }

  export async function fetchPatientById({professionalId, patientId}: IProfessionalIdAndPatient): Promise<PatientDto> {
    const url = `${professionalId}/patients/${patientId}`;
    const { data } = await api.get(url);
    return data;
  }


  export async function fetchDeletePatient({professionalId, patientId}: IProfessionalIdAndPatient)
  : Promise<any> {
    const url = `${professionalId}/patients/${patientId}`;
    const { data } = await api.delete(url);
    return data;
  }


  export async function fetchAddPatient({cfp,createdAt,email,id,name,phone,professionalId,role} :PatientDto)
  : Promise<PatientDto> {
    const params ={
      cfp,
      createdAt, 
      email,
      id,
      name,
      phone,
      professionalId,
      role
    }
    
    const url = `${professionalId}/patients`;
    const { data } = await api.post(url, params);
    return data;
  }


  export async function fetchEditPatient({cfp,createdAt,email,id,name,phone,professionalId,role} :PatientDto)
  : Promise<PatientDto> {
    const params ={
      cfp,
      createdAt, 
      email,
      id,
      name,
      phone,
      professionalId,
      role
    }
    
    const url = `${professionalId}/patients`;
    const { data } = await api.put(url, params);
    return data;
  }


