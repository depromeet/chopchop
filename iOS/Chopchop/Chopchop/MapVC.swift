//
//  MapVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 16..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class MapVC: UIViewController {

    let scrollView: UIScrollView = {
        let sv = UIScrollView()
        
        return sv
    }()
    let mapView: NMapView = {
        let mv = NMapView()
        
        return mv
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        setupViews()
    }
    
    func setupViews() {
        title = "Map"
        view.backgroundColor = .white
        
        view.addSubview(scrollView)
        scrollView.frame = view.frame
        
        
        scrollView.addSubview(mapView)
        
        let width = view.frame.width
        mapView.frame = CGRect(x: 0, y: 8, width: width, height: width)
        
        scrollView.contentSize = CGSize(width: width, height: 1000)
        
        setupMapView()
    }
    
    func setupMapView() {
        mapView.delegate = self
        mapView.setClientId("GQjUgdicm7CjAcHlxTgU")
//        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]


    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        mapView.didReceiveMemoryWarning()
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}


extension MapVC: NMapViewDelegate, NMapPOIdataOverlayDelegate {
    
    // MARK: - NMapViewDelegate
    
    open func onMapView(_ mapView: NMapView!, initHandler error: NMapError!) {
        if (error == nil) { // success
            // set map center and level
            mapView.setMapCenter(NGeoPoint(longitude:126.978371, latitude:37.5666091), atLevel:11)
            // set for retina display
            mapView.setMapEnlarged(true, mapHD: true)
            // set map mode : vector/satelite/hybrid
            mapView.mapViewMode = .vector
        } else { // fail
            print("onMapView:initHandler: \(error.description)")
        }
    }
    
    // MARK: - NMapPOIdataOverlayDelegate
    
    open func onMapOverlay(_ poiDataOverlay: NMapPOIdataOverlay!, imageForOverlayItem poiItem: NMapPOIitem!, selected: Bool) -> UIImage! {
        return nil
    }
    
    open func onMapOverlay(_ poiDataOverlay: NMapPOIdataOverlay!, anchorPointWithType poiFlagType: NMapPOIflagType) -> CGPoint {
        return CGPoint(x: 0, y: 0)
    }
    
    open func onMapOverlay(_ poiDataOverlay: NMapPOIdataOverlay!, calloutOffsetWithType poiFlagType: NMapPOIflagType) -> CGPoint {
        return CGPoint(x: 0, y: 0)
    }
    
    open func onMapOverlay(_ poiDataOverlay: NMapPOIdataOverlay!, imageForCalloutOverlayItem poiItem: NMapPOIitem!, constraintSize: CGSize, selected: Bool, imageForCalloutRightAccessory: UIImage!, calloutPosition: UnsafeMutablePointer<CGPoint>!, calloutHit calloutHitRect: UnsafeMutablePointer<CGRect>!) -> UIImage! {
        return nil
    }

}
