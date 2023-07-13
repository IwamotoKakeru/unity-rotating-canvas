﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class BoardMovement : MonoBehaviour
{

    [SerializeField] private float rotationSpeed = 120.0f;
    void Start()
    {
    }

    void Update()
    {
        transform.Rotate(0f, rotationSpeed * Time.deltaTime, 0f);
    }

    public void SetRotationSpeed(float setRotationSpeed)
    {
        rotationSpeed = setRotationSpeed;
    }

    public float GetRotationSpeed(){
        return rotationSpeed;
    }
}
